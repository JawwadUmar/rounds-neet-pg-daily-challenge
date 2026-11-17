# Implementation plan

1. Research provenance and assess public datasets. Author and reference 190 distinct medium/hard clinical and applied questions, ten per subject. Validate all metadata, answer keys, distractor explanations and coverage before any UI work.
2. Implement pure TypeScript domain modules: immutable question bank and schedule, calendar dates, attempts, completion eligibility, streaks and spoiler-free sharing. Test deterministic historical selection, no duplicates, no repeat for 38 days, midnight, time zones, missed days and catch-up.
3. Implement IndexedDB persistence with atomic updates across tabs, localStorage fallback, schema validation and explicit degraded-storage messaging. Preserve an initial study time zone and timestamp all submissions. Add JSON export/import for portable backups.
4. Build a responsive React dashboard with an accessible quiz, explanations, calendar and contribution grid, history, statistics, theme and result sharing. Use no application server, auth, remote API or runtime question generation.
5. Run bank validation, domain tests, production build and browser tests at desktop/mobile sizes. Document sourcing limits, clock limits and static hosting.

## Architecture decisions

- A frozen `v1` schedule contains 190 unique IDs, balanced across 19 subjects. Each date consumes five slots. All five subjects differ; no question repeats until day 39. Fixed per-subject seeded permutations avoid bias from file order. Future bank editions must have a date-effective version without modifying previous schedules.
- Dates are ISO calendar days in the user's saved IANA study time zone (initially the browser's zone). Travel does not alter that zone. Date arithmetic uses UTC ordinals, never elapsed local milliseconds.
- A completed challenge records both its challenge date and actual completion timestamp/day. Only completion on its own date is streak-eligible. Catch-up still marks the original challenge green. Current streak can continue from yesterday while today is pending.
- Browser time is the only available clock. A persisted high-water timestamp flags rollback; an in-session monotonic comparison flags clock jumps. A static offline app cannot authenticate system time or prevent deliberate clock/storage manipulation. Never pretend otherwise.
- The archive begins 1 January 2026; future dates are disabled. Challenge dates before this release's question bank are explicitly retrospective practice. There is no asserted NEET-PG 2027 exam date.
- IndexedDB stores a versioned record. Submitted answers are immutable. Each atomic read-modify-write merges from durable storage to prevent stale tabs overwriting progress. Streaks and calendar are derived from completion records, so there is one source of truth.
- Static output is `dist/`. A development HTTP server is tooling only and is unnecessary after deployment to ordinary static hosting. No Sites private hosting is introduced because the requested application has no authentication dependency.
