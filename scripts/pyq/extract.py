"""Read the supplied MEDINK 2025–2018 edition, keeping its question and answer keys paired.

Usage: python scripts/pyq/extract.py <pdf> [--out .cache/pyq-raw.json]
Requires PyMuPDF. The optional checkout-local installation is for authoring only.
"""
import argparse
import collections
import hashlib
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(".cache/pdf-tools").resolve()))
import pymupdf

COUNTS = {2025: 200, 2024: 379, 2023: 197, 2022: 199, 2021: 197, 2020: 300, 2019: 293, 2018: 296}
# Physical sheet ranges overlap the adjacent answer section because the supplied PDF is imposed out of order.
RANGES = {
    "questions": [(7, 33), (81, 138), (225, 262), (296, 333), (378, 406), (449, 488), (551, 586), (653, 690)],
    "solutions": [(34, 80), (139, 233), (258, 304), (329, 386), (407, 448), (484, 557), (587, 661), (684, 757)],
}
NUM_COLOR = 0x181818
WHITE = 0xFFFFFF
CHOICE = re.compile(r"^\(([A-E])\)\s*")
EDITION_HASH = "9eb7ec1756bbafca718ea7ce49b8fc5ae5c59cc02f15de158cde17cea0ae274f"
SUBSCRIPT = str.maketrans("0123456789+-", "₀₁₂₃₄₅₆₇₈₉₊₋")
SUPERSCRIPT = str.maketrans("0123456789+-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻")


def number(span):
    if span["color"] == NUM_COLOR and re.fullmatch(r"\d+\.", span["text"].strip()):
        return int(span["text"].strip()[:-1])
    return None


def merge_lines(spans, preserve_paragraphs=False):
    """Rejoin typesetter wraps while retaining list, table, and paragraph boundaries."""
    rows = []
    for span in spans:
        if not span["text"].strip():
            continue
        first = rows[-1][0] if rows else None
        if first and span["page"] == first["page"] and (first["origin"][0]<288) == (span["origin"][0]<288) and abs(span["origin"][1]-first["origin"][1]) < max(span["size"],first["size"])*.64:
            rows[-1].append(span)
        else:
            rows.append([span])
    lines = []
    for row in rows:
        normal = max(row, key=lambda s:s["size"])
        previous, line = None, ""
        for s in sorted(row, key=lambda s:s["origin"][0]):
            word = s["text"].replace("\x01","�")
            if s["font"] == "MMaArrow-Regular":
                word = word.replace('"',"→")
            if s["size"] < normal["size"]*.80 and re.fullmatch(r"[0-9+−-]+",word.strip()):
                offset = s["origin"][1] - normal["origin"][1]
                word = word.strip().replace("−","-").translate(SUBSCRIPT if offset>0 else SUPERSCRIPT)
            gap = s["origin"][0] - previous["bbox"][2] if previous else 0
            space = previous and (gap>normal["size"]*.11 or previous["text"].endswith(" ") or s["text"].startswith(" "))
            line += (" " if space else "") + word.strip()
            previous = s
        lines.append(line)
    if preserve_paragraphs:
        return "\n".join(lines).strip()
    result = ""
    for line in lines:
        new_line = bool(re.match(r"^(?:\d+[.)]|[A-Ea-e][.)]|[ivx]+[.)]|[•●▪])\s", line))
        join = "\n" if new_line else ("" if result.endswith("-") else " ")
        result += (join if result else "") + line
    return result.strip()


def pages_by_section(doc):
    sections = collections.defaultdict(list)
    for page in doc:
        spans = [s for b in page.get_text("dict", flags=pymupdf.TEXTFLAGS_DICT & ~pymupdf.TEXT_PRESERVE_IMAGES)["blocks"]
                 if b["type"] == 0 for line in b["lines"] for s in line["spans"]
                 if s["text"].strip() and s["font"] != "Helvetica-Bold" and s["origin"][1] >= 55
                 and not re.fullmatch(r"\*+", s["text"].strip())]
        nums = [n for s in spans if (n := number(s)) is not None]
        if not nums:
            continue
        page_no = page.number + 1
        paper = "questions" if any(s["color"] == WHITE and abs(s["size"] - .25) < .01 for s in spans) else "solutions"
        year = next(y for y, (start, end) in zip(COUNTS, RANGES[paper]) if start <= page_no <= end)
        if nums != list(range(nums[0], nums[-1] + 1)):
            raise ValueError(f"Broken anchors on page {page_no}")
        content = [dict(s, page=page_no) for s in spans if s["size"] < 23]
        sections[year, paper].append((nums[0], content))
    return {key: [s for _, sheet in sorted(sheets) for s in sheet] for key, sheets in sections.items()}


def question_blocks(spans):
    result, subject, current = {}, "", None
    for s in spans:
        if round(s["size"]) == 16 and s["color"] != WHITE:
            subject = s["text"].strip()
        elif (n := number(s)) is not None:
            current = {"subjectHeading": subject, "page": s["page"], "origin": s["origin"], "visible": [], "answer": []}
            result[n] = current
        elif current is not None:
            current["answer" if s["color"] == WHITE else "visible"].append(s)
    return result


def solution_blocks(spans):
    result, question, answer = {}, [], None
    for s in spans:
        if (n := number(s)) is not None:
            answer = []
            result[n] = (question, answer, s["page"])
            question = []
        elif s["color"] == WHITE:
            question.append(s)
        elif answer is not None:
            answer.append(s)
    return result


def split_choices(spans):
    groups = {"statement": []}
    section = "statement"
    for s in spans:
        word = s["text"].lstrip()
        marker = CHOICE.match(word)
        if marker and marker[1] not in groups:
            section = marker[1]
            groups[section] = []
            s = {**s, "text": word[marker.end():]}
        groups[section].append(s)
    fields = {field: merge_lines(parts) for field, parts in groups.items()}
    if not all(k in fields for k in "ABCD"):
        # Several printed papers lay two options side by side inside one text span.
        for label, value in list(fields.items()):
            if label == "statement":
                continue
            parts = re.split(r"\s+\(([A-D])\)\s*",value)
            fields[label] = parts[0].strip()
            for letter, text in zip(parts[1::2], parts[2::2]):
                fields[letter] = text.strip()
    return fields


def compact(text):
    return re.sub(r"\s+", "", text)


def printed_solution(spans, option_text):
    full = merge_lines(spans)
    marker = CHOICE.match(full)
    if not marker:
        raise ValueError("Printed solution has no letter: " + full[:60])
    key = marker.group().strip()
    text = full[marker.end():].lstrip()
    option = option_text.get(marker[1], "").strip()
    if option:
        pattern = r"\s*".join(map(re.escape,compact(option)))
        match = re.match(pattern,text,re.I)
        if match:
            return key+" "+text[:match.end()], text[match.end():].lstrip()
    return key, text


def split_key(spans):
    spans = [s for s in spans if not re.fullmatch(r"Ans\s*:\s*", s["text"].strip(), re.I)]
    if not spans:
        return "", ""
    # The compressed answer text retains paragraph baselines; a long keyed answer can wrap.
    key, body = [], []
    for s in spans:
        if not key or (not body and abs(s["origin"][1] - key[0]["origin"][1]) < key[0]["size"]*.64 and s["page"] == key[0]["page"]):
            key.append(s)
        else:
            body.append(s)
    return merge_lines(key), merge_lines(body, preserve_paragraphs=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--out", type=Path, default=Path(".cache/pyq-raw.json"))
    args = parser.parse_args()
    fingerprint = hashlib.sha256(args.pdf.read_bytes()).hexdigest()
    if fingerprint != EDITION_HASH:
        raise ValueError("This extractor targets the supplied April 2026 edition.")
    with pymupdf.open(args.pdf) as doc:
        if len(doc) != 758:
            raise ValueError("The supplied edition has 758 physical pages.")
        sections = pages_by_section(doc)
    raw, audit, anchors = [], [], []
    for year, count in COUNTS.items():
        questions = question_blocks(sections[year, "questions"])
        solutions = solution_blocks(sections[year, "solutions"])
        assert sorted(questions) == sorted(solutions) == list(range(1, count + 1)), year
        for n, item in questions.items():
            key = f"pyq-{year}-{n}"
            check, printed, solution_page = solutions[n]
            primary = split_choices(item["visible"])
            secondary = split_choices(check)
            # The equation editor paints the decimal point out of text order. Transcriptions
            # below were checked against the rendered question sheet, including units.
            if year == 2024 and n == 297:
                primary["statement"] = "ABG shows pH = 7.2, HCO₃⁻ = 6mEq/L, pCO₂ = 22 mmHg, Sodium = 136 mEq/L, Cl⁻ = 112 mEq/L, K+ = 5.3 mEq/L. What is the correct interpretation?"
            if year == 2024 and n == 285:
                primary["statement"] = "A patient presents with the following laboratory values : pH 7.2, pCO₂ 13 mmHg, HCO₃⁻ 6 mEq/L, Na⁺ 136 mEq/L, Cl⁻ 110 mEq/L. Which of the following is correct about this condition?"
            answer_text, explanation = split_key(item["answer"])
            solution = merge_lines(printed)
            # Prefer the continuous paragraphs when their wording agrees. The separately
            # typeset solutions also recover missing/clipped keys in the question section.
            if compact(answer_text+explanation) != compact(solution):
                printed_key, printed_explanation = printed_solution(printed,primary)
                # The 2022 closing solution is cut short in the printed answer section.
                if not (year == 2022 and n == 199):
                    answer_text, explanation = printed_key, printed_explanation
            if year == 2018 and n in (74,75):
                misplaced = "Which statement given below about Alzheimer’s disease is incorrect?"
                if n == 74:
                    assert explanation.endswith(misplaced)
                    explanation = explanation[:-len(misplaced)].rstrip()
                else:
                    assert not primary["statement"]
                    primary["statement"] = misplaced
            audit.append(dict(id=key, secondary=secondary, printed=merge_lines(printed), hiddenAnswer=merge_lines(item["answer"],True)))
            raw.append(dict(id=key,year=year,number=n,subjectHeading=item["subjectHeading"],page=item["page"],
                            solutionPage=solution_page,statement=primary.pop("statement"),options=primary,
                            answerText=answer_text,explanation=explanation))
            anchors.append(dict(id=key,year=year,number=n,page=item["page"],origin=item["origin"]))
    args.out.parent.mkdir(parents=True,exist_ok=True)
    for path, data in [(args.out,raw),(args.out.with_name("pyq-crosscheck.json"),audit),(args.out.with_name("pyq-anchors.json"),anchors)]:
        path.write_text(json.dumps(data,ensure_ascii=False),encoding="utf-8")
    print(f"{len(raw)} numbered pairs, PDF SHA-256 {hashlib.sha256(args.pdf.read_bytes()).hexdigest()}")


if __name__ == "__main__":
    main()
