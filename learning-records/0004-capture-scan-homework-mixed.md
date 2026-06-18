# Capture-scan homework: one clean win, two different loss modes

You completed Lesson 3 homework — three rapid games with intentional e3-h3-d3 capture scanning. One win (Hungarian Hippo, mate on g7) and two losses. The losses are **not** the same pattern as Lesson 1 capture misses on e3/h3, which is important: the scan is landing in places, but two new failure modes appeared.

**Evidence:** Games o4HNxFX3 (loss, White Hungarian), pJ7NicZ9 (loss, Black Modern), v3TjizDT (win, White Hungarian).

**Game 3 (win):** e3-d3-h3 structure, `10. h3` chased the Ng4, you won a pawn with `11. Bxe5`, and when the queen reached h4 you found `24. Rxf7` and `25. Qxg7#`. This is exactly what Lesson 3 was building toward — scan the chain, then punish overextension.

**Game 1 (loss from winning):** Up an exchange after `31. Bxc7`. At move 34 you correctly rejected `Qxg6+` and `Qxd5+` — both lose your queen to pawn recaptures (`...hxg6`, `...cxd5`). The miss was playing `34. Qg3??` instead of the safe `34. hxg6`, allowing `...Qxa3` and queen infiltration via b2/d4/d1. Not an e3/h3/d3 miss — failed to convert when ahead: needed two-ply on check-captures (you passed) **and** queen-path scan before the quiet retreat (you didn't).

**Game 2 (loss, Black Modern):** Different structure — no White Hippo chain to scan. King never castled; after `23...Qxf3` you played `24...Bxb2` and the `...Bc3+` / `...Bxd2+` cascade let White's king march forward with endless queen checks. King-safety and **material grabs while the king is still in the center** — not a chain-scan problem.

**Reflection (session follow-up):**
- **Game 1, move 34:** Correctly saw `Qxg6+`/`Qxd5+` lose the queen to `...hxg6` / `...cxd5` (drops from +3 to −4 material). Those only work if Black plays `...Kh8` — can't assume that. Miss: `34.Qg3` instead of `34.hxg6`; didn't scan queen path to `a3` before the quiet retreat.
- **Game 2, move 24:** Saw hanging b2 pawn; played `...Bxb2` to clear it and open c3 for bishop/queen. Calculation was local (pawn + square) without **king on e8** audit. Classic "saw a capture, missed the king" — distinct from scan speed.
- **Scan timing:** Reports e3-h3-d3 stayed under ~3 sec; no time pressure in any game. Clock habit is holding; remaining leaks are **two-ply recapture math on check-captures** and **queen infiltration / king safety**.

**Implications:** Credit user for correct recapture vision on game 1. Next: (1) **two-ply rule** for any check-capture — "they take back how?", (2) queen path to a3/b2 before quiet moves, (3) king-safety gate before pawn grabs (game 2).
