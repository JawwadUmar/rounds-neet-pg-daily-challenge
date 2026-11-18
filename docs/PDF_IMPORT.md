# PDF import and verification

The primary source is the supplied 758-page **NEET PG Yearwise Exam Papers (2025–2018)**, MEDINK, April 2026. Its SHA-256 is `9eb7ec1756bbafca718ea7ce49b8fc5ae5c59cc02f15de158cde17cea0ae274f`. A paper year follows the publisher’s heading. The dataset carries no claim of independent NBEMS authentication.

| Paper | Numbered questions | Figures |
| --- | ---: | ---: |
| 2025 | 200 | 45 |
| 2024 | 379 | 140 |
| 2023 | 197 | 59 |
| 2022 | 199 | 61 |
| 2021 | 197 | 43 |
| 2020 | 300 | 62 |
| 2019 | 293 | 55 |
| 2018 | 296 | 30 |
| **Total** | **2,061** | **495** |

## Pairing and transcription

The question and solution sheets each contain an independently numbered run from 1 through the final item in the table. Physical pages are sometimes out of order. The extractor identifies the two layouts from their font sizes, sorts sheets by their first numbered anchor and verifies both complete sequences. Each item retains its physical question and solution pages for audit.

The question sheet supplies the stem and four lettered choices, including side-by-side options. The solution section supplies an independent answer key and rationale. Comparison with the continuous answer paragraphs embedded in the question sheets recovers truncated text in either representation. Typesetting whitespace is reflowed. Superscripts, subscripts and mathematical arrows are reconstructed from their positions and fonts. The two complex 2024 blood-gas stems were checked against rendered page images.

One Alzheimer’s disease stem appears at the end of the preceding entry in the typesetting. The extractor moves that exact sentence to 2018 question 75. The closing 2022 solution is cut short on its printed solution sheet. The complete paragraph is present in the corresponding question sheet.

Ten symbols in seven solutions appear as missing-character boxes in the rendered book. The transcription preserves them as `�`. Eight stems explicitly refer to a missing figure. Their library entries indicate the unavailable figure. Entries with those issues, duplicate options, or identified key inconsistencies are available for reading without grading. Other errors may exist in the supplied edition. Independent clinical and psychometric review remains outstanding.

## Images and indexes

The image extractor uses the physical column position and logical question order to attach figures across page boundaries. It filters repeated small QR graphics, cover art, ads and promotional overlays. Each retained image uses original encoded bytes or a lossless PNG at its native dimensions. There are 494 illustrated questions. The two pictures belonging to 2023 question 101 retain their displayed order.

The TypeScript entry point for a year loads the complete paper in printed question order. Annual data is grouped by the printed subject headings, using the app’s canonical subject names. The 2019 miscellaneous ECG items are indexed under General Medicine. The 19 files in `src/data/pyq/subjects/` provide cross-year subject ranges. Daily-eligible entries live in a shared TypeScript module so their text is stored once and the daily screen can load independently of the full papers.

All imported entries retain their four choices, answer letter, keyed answer text and solution. Missing per-option commentary is never synthesized. Since 19 November 2026, the daily rotation includes all 2,061 PDF questions alongside the 190 original practice questions; its frozen schedule covers all 2,251 unique items before final-day padding repeats. The 95 curated PDF entries retain their editorial difficulty ratings; remaining entries are marked with an estimated Medium level. Source-defective entries remain read-only and do not affect the scored total. The library and daily answers are saved independently.

## Reproduction

An ordinary app build uses the checked-in TypeScript and figure files. To re-extract this specific edition, install PyMuPDF for Python, then run the following from the repository root. A checkout-local PyMuPDF installation in `.cache/pdf-tools` also works.

```powershell
$paperFile = 'D:\Downloads\NEET PG Yearwise Exam Papers (2025-2018)_unlocked (1).pdf'
python -X utf8 scripts/pyq/extract.py $paperFile
python -X utf8 scripts/extract-pyq-images.py $paperFile
python -X utf8 scripts/pyq/populate.py
npm run validate:bank
```

The extraction scripts check the PDF fingerprint. Intermediate coordinates, alternate texts and the complete figure map are written under `.cache/`. The checked-in daily manifests remain immutable across a transcription rerun.

The visual design follows the supplied reference’s serif display typography, paper and walnut palettes, ruled catalogue, bookshelf navigation and focused reader. The app serves its fonts locally. [The Central Library](https://harshdotcom.github.io/AI-Systems/)
