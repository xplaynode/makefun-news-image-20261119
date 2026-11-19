# 19 November 2026 — World News in One Picture

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/xplaynode/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/xplaynode/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for make.fun **news-image-20261119** ("Sum up 19 November's world news in one image").

Entry for make.fun competition `news-image-20261119` ($250, top 50 paid,
deadline 2026-11-21T00:00Z).

## The image

A single-focus editorial poster for **19 November 2026**:

- **Lead story** — the APEC trilateral meeting in Shenzhen: the US, Chinese
  and Russian leaders at one table, their three flags behind a recognisable
  Xi Jinping in the centre, Shenzhen skyline outside. Headline:
  "TRUMP, XI & PUTIN MEET IN SHENZHEN".
- **Supporting stories** (one short footer line) — "GTA VI LAUNCHES
  WORLDWIDE" (the game's global rollout after a 13-year wait) and
  "VOYAGER 1 HITS ONE LIGHT-DAY" (NASA's probe reaching one light-day
  from Earth).
- The date "19 NOVEMBER 2026" is integrated as the top banner.

All text is rendered programmatically (PIL) over an AI-generated
illustration, so every word is crisp and legible — no garbled text.

## Program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. Outside the grader, set `MAKEFUN_OUTPUT_DIR`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: PNG, 1024x1024, 730,301 bytes (limit 1 MiB).
