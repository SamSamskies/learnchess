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

## Homework observations (Lesson 3)

- **Game 3 (v3TjizDT):** Scan + tactic combined — h3, Bxe5, Rxf7, Qxg7#. Model game for the lesson.
- **Game 1 (o4HNxFX3):** Was winning (+exchange) at move 31; correctly rejected Qxg6+/Qxd5+ (pawn recaptures lose queen). Threw it with 34. Qg3?? instead of hxg6 — queen infiltration (a3 → b2 → d4). Not e3/h3/d3 — queen-path miss + wrong quiet move when ahead.
- **Game 2 (pJ7NicZ9):** Black Modern, king never castled; Bxb2/Bc3+ cascade with central king. Different structure — king safety, not chain scan.
- User reported practicing scan in all three; losses are **different bugs**, not proof the habit failed.
- **Reflection:** Scan stayed &lt;3 sec, no time pressure — clock/scan habits holding.
- **Game 1:** User correctly saw `Qxg6+`/`Qxd5+` lose queen to pawn recapture (`hxg6`, `cxd5`). Teacher correction applied. Real miss was `Qg3` + queen infiltration; `hxg6` was the simple win.
- **Game 2:** `...Bxb2` was deliberate (hanging pawn + open c3); missed king-on-e8 audit, not scan miss.

## Homework observations (Lesson 4)

- **Game 1 (UC1l19yg):** Queen path scan before `16...Rac8` — verified `h3` defended, rook lift safe. `12...Kh7` king tuck before `...e5`. Won on time from winning position (`29...Rc2`).
- **Game 2 (ABwWLPy1):** Two-ply on `56. Rxf7+` — correct check-capture sequence in winning rook endgame. Hungarian win vs 1400.
- **Game 3 (lcdaCOns):** Opening collapse after `3...e6` vs `Qf3` and `12. Bxe6` — not a Lesson 4 miss; **Captures** on own `e6` pawn + Qf3 response gap.
- **Pattern:** Two-ply and queen paths land when ahead/stable; opening tactical collapses bypass the new filters entirely.
- Rating climbed to ~1333 across the batch.
