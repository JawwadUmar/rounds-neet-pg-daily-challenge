# Rounds — NEET-PG Daily Challenge

A static React and TypeScript application for NEET-PG 2027, with five fixed questions per study day and an illustrated library of eight previous-year papers. The library supports browsing by year or subject, keyword search, zoomable figures, locked attempts and detailed solutions. Daily challenges also track streaks, calendar activity and shareable results. Progress stays in the browser.

## Run locally

Requires Node.js 22+ and npm.

```powershell
npm ci --cache .cache/npm
npm run dev
```

Open **http://127.0.0.1:4173**. The local HTTP process is a development tool, not an application backend.

```powershell
npm run validate:bank
npm test
npm run build
npm run test:e2e
```

Browser tests use Playwright Chromium. If the browser is missing, run `npx playwright install chromium`. Tests launch the preview server automatically when one is not already running.

## Static deployment

`npm run build` emits the app, year-wise data modules, fonts and question figures in `dist/`. Upload the entire directory to a static host. Relative asset paths support deployment in a subdirectory. HTTPS enables native sharing and clipboard access on supported browsers.

### GitHub Pages deployment

A GitHub Actions workflow is configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) to automatically test, build, and deploy the application to GitHub Pages on every push to the `main` branch.

To enable GitHub Pages in your repository:
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually from the **Actions** tab) to deploy.

Do not open `index.html` directly with `file://`; browser module, storage and clipboard restrictions differ there. Use the development preview or static hosting. All application assets and question data are bundled locally. No external fonts, analytics, trackers or runtime API calls are used. The app does not install a service worker; offline reopening is not guaranteed.

## Question bank and provenance

The full bank contains **2,251 questions**. The eight annual papers contribute 2,061 numbered entries and 495 illustrations from the supplied MEDINK compilation. The original 190 practice questions retain their IDs, answer order and learning points. The paper entries retain the publication’s wording, answer letters and explanations. They carry their compilation year in the data. Official exam wording and clinical accuracy have not been independently authenticated.

Of the paper entries, 95 have editorial medium or hard ratings for daily use. All 2,061 are accessible in the library, including short recall items and read-only questions with known defects. The interface keeps source information in the underlying dataset. See [PDF import and verification](docs/PDF_IMPORT.md) and the [original practice-bank research](docs/QUESTION_SOURCING.md).

## Date selection and historical reproducibility

- The archive starts **1 January 2026**. Earlier dates in the archive are retrospective practice, not a claim that the product was live then.
- `src/data/schedule-v1.json` is an immutable 190-ID manifest. Each day consumes five consecutive slots in a 38-day cycle. Each set contains five different subjects. Every question appears exactly once per cycle, so no question repeats in any consecutive 38-day window.
- Same date and bank edition always select the same ordered questions, independently of session, browser, timezone travel, file order or user progress. The schedule depends on a calendar date, not on the time of the request.
- On **18 November 2026**, new challenges enter the mixed edition in `src/data/schedule-v2.json`. It cycles through 285 qualified items, with five different subjects and both paper and original questions each day. Previously saved sets keep their recorded version. An upgrade also preserves the last set opened in the original app when the user had only read it.
- The freeze scripts document the seeded construction. Preserve both historical manifests and their IDs. A subsequent edition needs its own effective date.
- Practice questions retain their deterministic ordering. Imported papers retain the exact A–D positions printed in the book.
- The interface and attempt engine reject navigation/submission beyond the study day or before the archive boundary. Existing historical challenges stay accessible indefinitely as the finite schedule repeats.

## Completion, streaks and travel

The saved IANA study timezone is initialized from the browser, then remains fixed. Calendar arithmetic uses ISO date keys and UTC ordinals, avoiding daylight-saving errors. Traveling does not move completed challenges to different dates. Midnight resets an open today's view to the new set; an open historical view remains historical.

A day becomes green only when all five answers are confirmed, regardless of score. Draft selections survive refresh but do not count. Submitted answers are locked.

Every completion records its challenge date, actual timestamp and actual study-calendar day. It receives streak eligibility only when completed on its own date, with no detected clock anomaly. Completing an old challenge turns the original date green and increases the completed total, but never restores a broken streak. A streak ending yesterday remains current until today's opportunity is missed. Current and longest streak, accuracy and calendar activity are derived from durable records.

**Clock limit:** a browser-only app has no authenticated time source. Persisted timestamp rollback and in-session wall/monotonic jumps are detected, with a visible message and no streak credit for affected new completions. A future system date on a first visit, changes between sessions, deliberate clock edits and tampered local data cannot be universally detected. Navigation is limited by the observed study day. No offline system can honestly promise stronger anti-cheating guarantees.

## Persistence, backups and failure handling

- IndexedDB database: `neet-pg-daily-v1`, object store `profile`, key `main`.
- Versioned records store dates, frozen question IDs, selected/submitted answers, completion timestamps, streak eligibility, theme, study timezone, bookmarks and a clock high-water mark.
- Ordinary answer updates use atomic IndexedDB read–modify–write transactions. Multiple tabs synchronize using BroadcastChannel. When IndexedDB is unavailable, localStorage is used, with Web Locks for supported cross-tab fallback updates. Browsers without Web Locks have weaker simultaneous-tab guarantees in fallback mode.
- Storage failure switches to an explicit temporary-session mode if neither durable option works. The UI does not promise saving in that mode. Corrupt primary data is preserved untouched and can be downloaded from Settings.
- Export/import uses JSON. Compatible backup records merge; conflicting locked answers or inconsistent timestamps are rejected. A backup from a different study timezone must be imported into an empty browser profile. Import only trusted backups; local records cannot be authenticated without a backend.
- Clearing site data, private browsing, browser eviction or changing origins/devices may remove progress. Export a backup regularly. Browser cache is not the progress store. User-facing notices explain these limits.

## Code map

| Area | Files |
| --- | --- |
| Authored static question bank | `src/data/*.ts` |
| Paper data and 19 subject indexes | `src/data/pyq/` |
| Reproducible PDF import | `scripts/pyq/`, `scripts/extract-pyq-images.py` |
| Extracted figures | `public/assets/images/pyq/{year}/` |
| Immutable daily schedules | `src/data/schedule-v1.json`, `src/data/schedule-v2.json`, `src/core/schedule.ts` |
| Study-calendar dates | `src/core/dates.ts` |
| Attempts, locking, validation and clocks | `src/core/model.ts` |
| Streaks and metrics | `src/core/stats.ts` |
| IndexedDB, fallback, synchronization and backups | `src/core/storage.ts` |
| Result text and clipboard fallback | `src/core/share.ts` |
| React views and responsive themes | `src/ui/` |
| Bank structure validator | `scripts/validate-bank.mjs` |
| Domain and browser regression tests | `tests/` |

The original implementation plan is in [docs/PLAN.md](docs/PLAN.md).
