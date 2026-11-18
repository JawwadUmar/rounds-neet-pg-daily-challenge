# Validation record

## Illustrated paper edition

The final `npm run validate:bank` verifies 2,251 distinct question IDs, eight complete annual question-number sequences, nineteen subjects per paper, the four choices and printed keys, the two physical page locators, and all 495 linked figure files. The daily pool contains 285 qualified entries. The source text audit, including the known gaps in the publication, is described in [PDF import and verification](PDF_IMPORT.md).

`npm test` passes 23 domain tests. The added checks cover the complete mixed schedule, old-edition attempts and scores, migration of a previously viewed legacy day, independent library attempts and backups, and equivalence of the nineteen subject indexes to the complete annual records.

The Chromium suite passes 25 browser tests. The additions exercise year and subject selection, search, pagination, read-only exceptions, saved library answers, single- and two-figure questions, lightbox zoom, Escape and focus restoration. They also check the requested UI removals. Desktop and mobile screenshots were inspected in light and dark themes. The production build passes TypeScript checking and bundles the year files and fonts as relative assets.

## Original practice edition

Date: 18 November 2026.

## Question-bank gate

`npm run validate:bank` passes for 190 unique questions, 19 subjects with ten questions each, 53 Medium and 137 Hard editorial ratings. Four distinct labeled alternatives, valid keys, complete option rationales, learning points and references are required. Answer positions: A 46, B 48, C 49, D 47. Every item is Practice with a null exam year.

The question bank was authored and structurally validated before UI implementation. Selected management decisions were checked against named primary guidelines; this does not constitute independent clinician validation. Reference limitations and dataset decisions are recorded in `QUESTION_SOURCING.md`.

## Domain regression tests

`npm test`: **18 passed**. Coverage includes frozen historical mappings, five distinct subjects/day, no repeats across sliding 38-day windows, leap-year/DST date arithmetic, saved-zone midnight, future-date rejection, serialized drafts, locked/idempotent submissions, partial completion, missed days, current/longest streak, catch-up without streak repair, midnight completion, clock anomalies, spoiler-free result generation, damaged records, safe backup merging and bookmark review dates.

## Browser regression tests

`npm run test:e2e`: **22 passed** in Chromium. Coverage includes:

- No startup JavaScript errors, external runtime requests or unnamed icon buttons.
- Draft and confirmed-answer persistence across refresh; explanation gating and three distractor rationales.
- Correct and incorrect scores/squares, completed-date coloring, streak credit and result copying.
- Catch-up without current-streak credit; future date/month disablement; earliest archive date.
- Light/dark persistence; JSON export; invalid/conflicting import rejection; restoration on an empty profile.
- Simultaneous IndexedDB submissions from two tabs without lost answers.
- IndexedDB unavailable, all storage unavailable, corrupt data preservation and write-failure fallback.
- Midnight rollover, clock rollback and travel to America/Los_Angeles while preserving the saved India study day.
- Closing and restarting a persistent Chromium browser process after three confirmed answers.
- Legacy clipboard copying inside the native modal when modern clipboard access is denied.
- Responsive layouts at 1440, 1024, 768, 390 and 320 pixels, with mobile navigation and no page-level horizontal overflow.

The capture test writes desktop, mobile light and mobile dark screenshots to `test-results/` (each subsequent test run clears this directory). Visual review led to improved mobile tabs, hidden-navigation focus behavior, a single-column tap-friendly mobile calendar and stronger light-mode text contrast. The responsive checks passed again after those visual changes. The IndexedDB-write-failure check also passed again after preserving the latest transaction snapshot in the fallback path.

## Build and limits

`npm run build` type-checks the application and produces a static bundle. There are no backend processes required for deployed use, no credentials or authentication dependency, and no external font or API requests.

Not claimed: independent medical/psychometric validation; authenticated PYQs; exhaustive NEET-PG topic coverage; an authenticated clock; guaranteed storage retention against browser/user deletion; guaranteed offline reopening; Safari/Firefox browser-suite verification. Browser-local data can be edited deliberately. LocalStorage fallback without Web Locks has weaker simultaneous-tab guarantees.

The full 22-test browser run completed using an explicitly managed preview. One later targeted run passed its assertion but the automatically started preview stalled during Windows process teardown; it was stopped manually. This environment limitation did not affect application assertions or the static production build.
