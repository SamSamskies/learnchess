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
