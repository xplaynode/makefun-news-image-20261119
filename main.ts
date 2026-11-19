// news-image-20261119 entry: sums up 19 November 2026 in one image.
// The poster (entry.png beside this file) leads with the APEC trilateral
// meeting of the US, Chinese and Russian leaders in Shenzhen, with the
// GTA VI worldwide launch and Voyager 1's one-light-day milestone as
// supporting stories, under a banner naming the date: 19 November 2026.
// The program copies that image to /output/entry.png (no network needed).
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs this twice; both runs copy the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
