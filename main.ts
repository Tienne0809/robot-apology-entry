import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "I deleted your draft of the speech and kept the old outline instead, because the filenames differed by one letter.\nNow I read every filename aloud before I delete anything, and I keep a copy in the trash for a day first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
