"""Build edition-specific TypeScript modules from the paired text and figure extracts."""
import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "src/data/pyq"
CACHE = ROOT / ".cache"
read = lambda p: json.loads(p.read_text(encoding="utf8"))
raw = read(CACHE / "pyq-raw.json")
images = read(CACHE / "pyq-assets.json")
ranges = read(Path(__file__).with_name("subject-ranges.json"))
with Path(__file__).with_name("daily-selection.tsv").open(encoding="utf8") as handle:
    choices = {row["id"]:row for row in csv.DictReader(handle, delimiter="\t")}

# These items refer to a figure absent on the question sheet.
missing = set("""2024-121 2024-243 2024-247 2024-308 2022-140 2022-148 2022-187 2020-172""".split())
# Retain the printed keys verbatim. Do not score known contradictory or duplicated choices.
review = set("""2025-143 2018-73 2018-26 2020-254 2020-60 2022-82 2022-194 2022-83 2024-271
                2019-49 2025-161 2025-168 2024-221 2025-150""".split())
daily, library = defaultdict(lambda:defaultdict(list)), defaultdict(lambda:defaultdict(list))
scores = Counter()
for r in raw:
    year, n, id_ = r["year"], r["number"], r["id"]
    subject = [s for start,s in ranges[str(year)] if start <= n][-1]
    assert all(r["options"].get(k) for k in "ABCD") and len(r["options"])==4, id_
    key = re.match(r"^\(([ABCD])\)",r["answerText"])
    assert key and r["statement"] and r["explanation"], id_
    entry = dict(number=n, statement=r["statement"], options=[r["options"][k] for k in "ABCD"], correct=key[1],
                 answerText=r["answerText"], explanation=r["explanation"], pages=[r["page"],r["solutionPage"]])
    if id_ in images:
        entry["images"] = [{k:im[k] for k in ("src","width","height","alt")} for im in images[id_]]
    short = f"{year}-{n}"
    if short in missing:
        assert id_ not in images
        entry["imageUnavailable"] = True
    if short in review or short in missing or '�' in r["explanation"]:
        entry["reviewOnly"] = True
    if id_ in choices:
        assert not entry.get("reviewOnly"), id_
        entry.update(difficulty=choices[id_]["level"],topic=choices[id_]["topic"])
        scores[subject]+=1
    else:
        # Every imported paper item joins the future daily rotation. Keep an
        # explicit estimate marker where no curated difficulty is available.
        entry.update(difficulty="Medium",difficultyEstimated=True,topic=subject)
    daily[year][subject].append(entry)
assert len(raw)==2061 and len(images)==494 and sum(map(len,images.values()))==495
assert len(scores)==19 and set(scores.values())=={5} and sum(scores.values())==len(choices)==95
dump = lambda value:json.dumps(value, ensure_ascii=False, indent=2)
OUT.mkdir(exist_ok=True,parents=True)
header = '// Generated from the supplied edition by scripts/pyq/populate.py.\n'
daily_data = ',\n'.join(f'  ...readPaper({year}, {dump(groups)})' for year,groups in daily.items())
(OUT/'daily.ts').write_text(header+"import { readPaper } from './paper';\n\nexport const dailyPapers = [\n"+daily_data+"\n];\n",encoding='utf8')
for year in ranges:
    groups=library[int(year)]
    (OUT/f'{year}.ts').write_text(header+"import { readPaper } from './paper';\nimport { dailyPapers } from './daily';\n\n"
        +f"const entries = readPaper({year}, {dump(groups)});\n"
        +f"export default [...entries, ...dailyPapers.filter(q => q.examYear === {year})].sort((a, b) => a.number! - b.number!);\n",encoding='utf8')
# A second, compact physical index makes each subject usable across all eight
# papers. Ranges address the original question numbers and never duplicate prose.
subject_years = defaultdict(dict)
for year, sections in ranges.items():
    last = sum(len(items) for items in library[int(year)].values()) + sum(len(items) for items in daily[int(year)].values())
    for i,(first,subject) in enumerate(sections):
        end = sections[i+1][0]-1 if i+1<len(sections) else last
        subject_years[subject].setdefault(year,[]).append([first,end])
subject_dir=OUT/'subjects'
subject_dir.mkdir(exist_ok=True)
imports, registry = [], []
for subject, years in sorted(subject_years.items()):
    slug=re.sub('[^a-z]+','-',subject.lower()).strip('-')
    name=slug.replace('-','_')
    lines=',\n'.join(f'  {year}: {json.dumps(pairs)}' for year,pairs in years.items())
    (subject_dir/f'{slug}.ts').write_text(header+'export default {\n'+lines+'\n};\n',encoding='utf8')
    imports.append(f"import {name} from './subjects/{slug}';")
    registry.append(f'  {json.dumps(subject)}: {name}')
(OUT/'subject-index.ts').write_text(header+"import type { Subject } from '../types';\nimport type { PaperYear } from './index';\n"
    +'\n'.join(imports)+'\n\nexport const subjectIndex: Record<Subject, Record<PaperYear, number[][]>> = {\n'
    +',\n'.join(registry)+'\n};\n',encoding='utf8')
print(f"{len(raw)} year-indexed and daily questions, {len(choices)} curated difficulty ratings, {sum(map(len,images.values()))} figures")
