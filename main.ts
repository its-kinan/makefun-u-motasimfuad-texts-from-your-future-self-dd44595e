// Texts From Your Future Self — make.fun entry (program/v1).
// Writes one funny text from the writer's future self to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised draft: cut 28+ chars over the gate. Same joke, tighter — the
// fake-plant twist lands in sentence two, and the kicker ("I'm in it")
// pays off in the last line instead of trailing off in a long clause.
const TEXT =
  "It's future you. Stop watering the plant, it's fake. " +
  "You've been watering plastic for 3 years and the neighbours have a group " +
  "chat about it. I know. I'm in it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`${TEXT.length} chars written to /output/entry.txt`);
