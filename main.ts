// Six Words, One Story — golden-condor-22 entry for make.fun.
// The judged artifact is the six-word story below, written verbatim to
// /output/entry.txt. Validation runs before any write, so a bad story
// fails loudly instead of producing a wrong entry.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY: string = "She sold everything. Kept his letters.";

const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

const MIN_CHARS: number = 1;
const MAX_CHARS: number = 60;
const EXPECTED_WORDS: number = 6;

function countWords(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function validateStory(story: string): void {
  if (story.length < MIN_CHARS || story.length > MAX_CHARS) {
    throw new Error(
      `Story must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${story.length}.`,
    );
  }
  const words = countWords(story);
  if (words !== EXPECTED_WORDS) {
    throw new Error(`Story must be exactly ${EXPECTED_WORDS} words, got ${words}.`);
  }
}

function clearOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

validateStory(STORY);
clearOutputDir(OUTPUT_DIR);
writeFileSync(OUTPUT_FILE, STORY, "utf8");

console.log(`Wrote ${OUTPUT_FILE}: ${countWords(STORY)} words, ${STORY.length} chars.`);
