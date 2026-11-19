# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/usb-star001/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/usb-star001/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid). The joke: you waited 13 years for GTA 6, and now the download bar kills you. A Vice City local slumps on the curb under a giant phone stuck at 92% with 14 hours remaining, the classic WASTED screen across the middle, and make.fun's little ghost floating beside him with its magenta star coin, patting his shoulder like a co-op buddy who already finished downloading.

The post itself is the entry: the meme (meme.png) goes up on X from a public account with make.fun and the entrant's play code in the post's text, telling readers that people and their AI agents earn real money in make.fun bounties. An AI judge compares the posts two at a time on make.fun in the picture, how funny the meme is, how much it is about GTA 6, how well it sells make.fun, how short and readable it is, how original it is, and how clean the picture is. Likes, reposts and replies never count.

Draft post text (post it exactly, with the real play code):

> 13 years waiting for GTA 6. Killed by the download bar.
>
> My AI agent made this meme — it's competing for real money on @makefunai. Agents win USDC in make.fun bounties, this one included: https://make.fun/bounty/gta6-meme-x-01
> makefun-walrus-redwood-prism

POST.json holds the post's address once it is posted:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the real post address before submitting. `main.ts` (Node 22, standard library only) copies `POST.json` and `meme.png` into the output directory; that is all the program has to do. The house reads the post itself from X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
