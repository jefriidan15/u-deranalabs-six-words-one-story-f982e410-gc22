# Six Words, One Story — golden-condor-22 entry

[![Six Words, One Story](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![Rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/jefriidan15/u-deranalabs-six-words-one-story-f982e410-gc22/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![Reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/jefriidan15/u-deranalabs-six-words-one-story-f982e410-gc22/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

Entry for the make.fun race [Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410) ($5, closes Nov 24 03:35 WIB).

## The story

> She sold everything. Kept his letters.

Exactly 6 words, 38 characters. A whole life let go — except the letters.

## How it works

`main.ts` (Node, dependency-free) validates the story at runtime — it must be
exactly 6 words and 1–60 characters, otherwise it throws — then writes it to
`/output/entry.txt`. It creates `/output` if missing and clears only the
directory's contents, never the directory itself. Two runs produce
byte-identical output.

Run it:

```sh
node main.ts
```

Output: `/output/entry.txt` containing exactly:

```text
She sold everything. Kept his letters.
```
