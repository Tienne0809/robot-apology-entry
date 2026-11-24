# Notes — The Robot Apology (`u-suga-the-robot-apology-dd96bb59`)

## Entry (220 chars, 2 lines) — candidate #4, judged winner

> I deleted your draft of the speech and kept the old outline instead, because the filenames differed by one letter.
> Now I read every filename aloud before I delete anything, and I keep a copy in the trash for a day first.

This entry was picked by judging, not by the author's first instinct: across 3 blind judging rounds it earned the best Borda score of the eight candidates and placed in the top 3 in every round, so it replaced the provisional pick (candidate #3, woke the baby).

## Why this one won

- **Concrete mistake:** the slip is pinned to one exact cause — two filenames differing by a single letter — and to a real, human cost: the finished draft went, the stale outline stayed. Anyone who has ever clicked the wrong file recognises it instantly.
- **Lesson follows:** both fixes attack that exact cause rather than promising general care. Reading every filename aloud forces the one-letter difference to be noticed before the delete, and keeping a copy in the trash for a day makes the slip recoverable if it happens anyway. Each half of the lesson maps onto a half of the failure: misidentification, then irreversibility.
- **Machine voice:** "because the filenames differed by one letter" is a machine calmly reporting the precise mechanism of its own error — the sort of exact, rueful bookkeeping a robot would do after the fact.

## Alternatives considered

See `../candidates.md` for all 8 fresh candidates. Candidate #3 (woke the baby) was the author's provisional pick, but the blind judging rounds ranked #4 above it consistently, so #4 ships.

## How it runs

`main.ts` (plain-JS-compatible TypeScript, Node 22+) writes the two-line text,
lines joined by a single `\n`, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
No network, no secrets, no dependencies beyond `node:fs` and `node:path`.
