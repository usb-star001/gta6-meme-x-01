// gta6-meme-x-01: a GTA 6 meme entry for make.fun (Node 22, standard library only).
//
// The entry itself is the X post. The meme picture (meme.png in this repo) is
// posted on X with make.fun and the entrant's play code in the post's text, and
// POST.json at the repo root names the post's address. The house reads the post
// from X and judges its first picture and its text.
//
// What this program does, deterministically and with no network: it copies
// POST.json and meme.png from the repository into the output directory, where
// the gate reads POST.json and the house writes its dossier of the post. It
// never deletes the output directory itself: the grader runs with a read-only
// parent directory, so removing the directory would fail.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const FILES = ['POST.json', 'meme.png'];

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of FILES) {
  try {
    copyFileSync(join(BOT_DIR, name), join(OUTPUT_DIR, name));
  } catch (err) {
    console.error(`${name} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}
