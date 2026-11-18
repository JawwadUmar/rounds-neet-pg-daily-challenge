"""Extract the supplied MEDINK edition's exam figures at native resolution.

Run with Python and PyMuPDF installed. Paths are relative to the project root.
The mapping is consumed by the text importer; only src, width, height and alt
belong in the runtime image object. Page numbers are physical, one-based.
"""

import argparse
import hashlib
import json
import re
import sys
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

sys.path.insert(0, str(Path(".cache/pdf-tools").resolve()))
import pymupdf


EDITION_SHA256 = "9eb7ec1756bbafca718ea7ce49b8fc5ae5c59cc02f15de158cde17cea0ae274f"
YEAR_BOUNDARIES = (55, 170, 279, 354, 423, 520, 616)
PAPER_LENGTHS = {2025: 200, 2024: 379, 2023: 197, 2022: 199,
                 2021: 197, 2020: 300, 2019: 293, 2018: 296}
QR_SIZES = {(49, 49), (55, 55), (74, 74), (185, 185)}
TEXT_FLAGS = pymupdf.TEXTFLAGS_DICT & ~pymupdf.TEXT_PRESERVE_IMAGES


@dataclass(frozen=True)
class Anchor:
    page: int
    number: int
    column: int
    baseline: float


def column(x):
    return 0 if x < 288 else 1


def paper_pages(document):
    """Identify question sheets and locate anchors in two-column reading order.

    This edition intersperses out-of-order sheets and occasional advertisements.
    Each question sheet contains white 0.25-point key text and consecutive
    printed item numbers. Solution sheets use a different font size. A figure
    before a sheet's first anchor continues the preceding numbered question
    in that year, which may be on a distant physical PDF page.
    """
    pages = []
    locations = {}
    for page in document:
        spans = [span for block in page.get_text("dict", flags=TEXT_FLAGS)["blocks"]
                 for line in block.get("lines", []) for span in line["spans"]]
        if not any(abs(span["size"] - 0.25) < 0.01 for span in spans):
            continue
        number = page.number + 1
        year = 2025 - sum(number > end for end in YEAR_BOUNDARIES)
        anchors = []
        for span in spans:
            x, y = span["origin"]
            marker = re.fullmatch(r"(\d{1,3})\.", span["text"].strip())
            if (marker and 8 < span["size"] < 12
                    and min(abs(x - 45), abs(x - 297)) < 1):
                anchors.append(Anchor(number, int(marker[1]), column(x), y))
        anchors.sort(key=lambda a: (a.column, a.baseline))
        if not anchors or [a.number for a in anchors] != list(range(anchors[0].number, anchors[-1].number + 1)):
            raise ValueError(f"Unexpected question numbering on physical page {number}")
        for anchor in anchors:
            key = (year, anchor.number)
            if key in locations:
                raise ValueError(f"Duplicate question anchor {key}")
            locations[key] = anchor
        pages.append((number, year, anchors))
    for year, count in PAPER_LENGTHS.items():
        found = {n for y, n in locations if y == year}
        if found != set(range(1, count + 1)):
            raise ValueError(f"Incomplete {year} paper; verify the edition and its sheet order")
    return pages, locations


def extract(pdf, public_dir, map_path):
    if hashlib.sha256(pdf.read_bytes()).hexdigest() != EDITION_SHA256:
        raise ValueError("This layout and its checked year boundaries belong to a different PDF edition")
    groups = defaultdict(list)
    with pymupdf.open(pdf) as document:
        pages, locations = paper_pages(document)
        for number, year, anchors in pages:
            page = document[number - 1]
            for xref, _, width, height, *_ in page.get_images(full=True):
                if (width, height) in QR_SIZES:
                    continue
                boxes = page.get_image_rects(xref)
                if len(boxes) != 1:
                    raise ValueError(f"Expected one drawn placement for figure {xref} on page {number}")
                box = boxes[0]
                position = (column((box.x0 + box.x1) / 2), (box.y0 + box.y1) / 2)
                before = [a for a in anchors if (a.column, a.baseline) <= position]
                q = before[-1].number if before else anchors[0].number - 1
                owner = locations[(year, q)]
                groups[(year, q)].append({
                    "page": number, "bbox": [round(v, 3) for v in box], "xref": xref,
                    "anchorPage": owner.page, "width": width, "height": height,
                })
        if sum(map(len, groups.values())) != 495:
            raise ValueError("Figure count differs from the audited edition")

        mapping = {}
        for (year, q), items in sorted(groups.items()):
            # Two adjacent clinical photographs for 2023 Q101 sit in one row
            # with baselines less than one point apart. Read left to right.
            items.sort(key=lambda item: (item["page"], round(item["bbox"][1] / 2), item["bbox"][0]))
            for index, item in enumerate(items, 1):
                image = document.extract_image(item["xref"])
                ext = {"jpeg": "jpg", "png": "png"}[image["ext"]]
                src = f"assets/images/pyq/{year}/q{q}-{index}.{ext}"
                path = public_dir / src
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(image["image"])
                if (image["width"], image["height"]) != (item["width"], item["height"]):
                    raise ValueError(f"Intrinsic image dimensions changed for {src}")
                item.update(src=src, alt="Figure accompanying the question" if len(items) == 1
                            else f"Question figure {index} of {len(items)}", role="question")
            mapping[f"pyq-{year}-{q}"] = items
        map_path.parent.mkdir(parents=True, exist_ok=True)
        map_path.write_text(json.dumps(mapping, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Extracted {sum(map(len, mapping.values()))} figures for {len(mapping)} questions")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--public", type=Path, default=Path("public"))
    parser.add_argument("--map", type=Path, default=Path(".cache/pyq-assets.json"))
    args = parser.parse_args()
    extract(args.pdf, args.public, args.map)
