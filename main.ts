// Six Words, One Story — make.fun entry (golden-condor-22)
//
// Writes a complete story told in exactly six words to /output/entry.txt.
//
// The story: "She sold everything. Kept his letters."
//   She(1) sold(2) everything.(3) Kept(4) his(5) letters.(6)
// A whole life in the reversal: she lets go of everything she owns
// and keeps only his letters. Who he was, why she sold it all, what
// the letters say — all left unsaid for the reader to fill in.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY: string = "She sold everything. Kept his letters.";
const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Create /output if missing; clear only its CONTENTS, never the dir itself
  // (the grader's root is read-only, so rmSync('/output') would fail EROFS).
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const entry of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, entry), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, STORY, "utf8");
}

main();
