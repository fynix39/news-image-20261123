# 23 November 2026 in one image

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/fynix39/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/fynix39/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A newspaper front page summing up **Monday 23 November 2026** in one image:
35 stories across 7 regions, a UTC timeline, a stat strip, a world map with
numbered pins, and a DATE CHECK box listing the stories deliberately left
out because they belong to another day.

- **3 big stories:** Ukraine sinks a Russian warship in Libya · Jensen Huang
  returns as Nvidia CEO and the Nasdaq jumps 6.51% · Iran vows to fight the
  U.S. naval blockade.
- **10 mid stories** and **22 more** in the "Also on Monday 23 November" list.
- Every story happened or was first reported on 23 November 2026, verified
  against dated Tier 1/2 sources (AP, Reuters, AFP, FIFA, USGS, NASA, WSJ,
  European Commission, NDR/WDR). Trust tags: CONFIRMED = 2+ outlets,
  OFFICIAL = on the record, REPORTED = one outlet.
- The image is drawn entirely in code (PIL + DejaVu fonts) — maps, diagrams
  and icons included. No photos, no AI-generated art.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
(1024×1024 PNG, 211,843 bytes) to `$MAKEFUN_OUTPUT_DIR/entry.png`,
verifying the 1 MiB cap, the PNG magic bytes, and that the copy is
byte-identical to the source. Two runs write the same bytes.

Entry for the [make.fun bounty "Sum up 23 November's world news in one
image"](https://make.fun/bounty/news-image-20261123).
