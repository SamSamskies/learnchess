# Teaching Notes

## Learning preferences

- Learns best by **playing games and reviewing them**
- Enjoys **Duolingo chess lessons** and **YouTube videos**
- Does **not** want to abandon the Hippo — plays it as both White and Black

## Platform context

- **Lichess Rapid 10+5**: ~1305 — primary rating anchor
- **Duolingo**: ~1140 — 10-minute games; often loses on time (not necessarily worse at chess)
- Lichess profile flags **time pressure** as a weakness
- Plays daily (~1 year), does puzzles, reviews games — but still blunders frequently

## Time control mix

- Blitz, rapid, and classical on Lichess depending on available time
- Duolingo when convenient (harder clock constraint)

## Lesson authoring

- Chess board FENs: generate via `chess.js` move sequences, never by hand; run `npm test` before shipping a lesson

## Homework observations (Lesson 1)

- CCT ritual is in play, but **Captures** on Hippo pawns (especially e3, h3) are the recurring miss — not Checks or deep Threats
- Thinking *too long* about CCT creates time anxiety → incomplete scan → more blunders (game 2)
- Game 3 (Black, Modern) shows the habit can work: no blunders, only a pawn-recapture inaccuracy

## Homework observations (Lesson 2)

- **Move-15 checkpoint passed all three games:** 6:11 (Black, Modern), 8:46 and 9:28 (White, Hungarian) — opening speed discipline is landing
- **No blunder cascade** in this batch; rating climbed 1311 → 1324 across the three games
- **Critical spend can work:** 80 sec on 14...Bxh8 in game 1 maintained the edge
- **New leak — misclick after long think:** game 2 spent ~47 sec planning Bf3, played Rf3 by accident; different from CCT/capture misses
- Homework item 3 (CCT >5 sec notes) not reported — ask next session if scan stayed tight
