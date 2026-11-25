// Make the AI Judge Laugh: The Office Joke Open
// Writes one line of office comedy, at most 200 characters, to /output/entry.txt.
// Stdlib only, no network, deterministic.
// The joke: the office printer jams for the third time in one day, so IT
// renames it "the shredder" — and suddenly it is the most reliable machine
// in the office. The twist lands on the last clause: the rename fixes
// nothing about the printer, only the expectation — which is exactly how
// office life works. The setup stays concrete (third jam today, IT) so the
// judge can picture it in one read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The printer jammed for the third time today, so IT renamed it 'the shredder' — suddenly it's the most reliable machine in the office.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the gate before writing: 1-200 chars, non-whitespace UTF-8.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} chars, outside the 1-200 gate`);
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${chars} chars)`);
