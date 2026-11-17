# Rounds — NEET-PG Daily Challenge

A static React + TypeScript application with five fixed questions per study day, educational explanations, streaks, an archive, contribution calendar, local progress, light/dark themes and spoiler-free sharing. No login, application backend, remote question API or server-side database.

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

`npm run build` emits `dist/index.html`, `app.js`, `app.css` and `favicon.svg`. Upload the contents of `dist/` to any ordinary static host. No environment variables or server process are needed. Relative asset paths support a subdirectory. Serve over HTTPS for native clipboard/share features; fallback copying and selectable share text are provided. No hosted site was registered and no authentication service is introduced.

Do not open `index.html` directly with `file://`; browser module, storage and clipboard restrictions differ there. Use the development preview or static hosting. All application assets and question data are bundled locally. No external fonts, analytics, trackers or runtime API calls are used. The app does not install a service worker; offline reopening is not guaranteed.

## Question bank and provenance

**190 original practice questions**, ten per each of the 19 requested subjects. 53 editorial Medium and 137 Hard ratings. All questions include four options, one key, subject/topic, provenance, a detailed explanation, individual distractor rationales, two or more takeaways and source titles/sections/links. This is a finite initial bank, not a replacement for an entire exam curriculum.

**No question is labeled an authenticated PYQ.** Public recall resources and MedMCQA/MedQA were researched but were not treated as evidence of exact official exam wording or years. The schema supports future verified PYQs; authored questions have `type: Practice` and `examYear: null`.

The bank is AI-authored and reference-linked, with no independent clinician or psychometric review. Automated validation proves structural consistency, not medical truth or measured difficulty. Specific guideline sources were checked for selected management decisions; broad subject reference links are reading pathways, not assertions of full-text audit for every item. See [question research and editorial policy](docs/QUESTION_SOURCING.md).

## Date selection and historical reproducibility

- The archive starts **1 January 2026**. Earlier dates in the archive are retrospective practice, not a claim that the product was live then.
- `src/data/schedule-v1.json` is an immutable 190-ID manifest. Each day consumes five consecutive slots in a 38-day cycle. Each set contains five different subjects. Every question appears exactly once per cycle, so no question repeats in any consecutive 38-day window.
- Same date and bank edition always select the same ordered questions, independently of session, browser, timezone travel, file order or user progress. The schedule depends on a calendar date, not on the time of the request.
- `scripts/freeze-schedule.mjs` documents the seeded construction and refuses to overwrite an existing manifest. **Do not regenerate v1 or rename/remove its IDs.** Future editions need a new manifest and explicit date-effective routing that preserves old mappings.
- Answer positions are fixed deterministic permutations of authored alternatives. No question text is generated at runtime.
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
| Immutable daily schedule | `src/data/schedule-v1.json`, `src/core/schedule.ts` |
| Study-calendar dates | `src/core/dates.ts` |
| Attempts, locking, validation and clocks | `src/core/model.ts` |
| Streaks and metrics | `src/core/stats.ts` |
| IndexedDB, fallback, synchronization and backups | `src/core/storage.ts` |
| Result text and clipboard fallback | `src/core/share.ts` |
| React views and responsive themes | `src/ui/` |
| Bank structure validator | `scripts/validate-bank.mjs` |
| Domain and browser regression tests | `tests/` |

The original implementation plan is in [docs/PLAN.md](docs/PLAN.md).
