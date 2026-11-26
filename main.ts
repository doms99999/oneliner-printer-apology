// The Printer Apology — entry program.
//
// Writes exactly one apology note to /output/entry.txt. Deterministic:
// the same bytes on every run.
//
// The note: "Apologies for the jam. I found a staple in my throat and,
// frankly, it had more spine than this office."
// The printer apologises while slipping its own grievance in — it choked on
// a staple, and the staple had more spine than the office. The punch lands
// on the last few words. No paper-jam apology, no "out of ink", no
// PC LOAD LETTER.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Apologies for the jam. I found a staple in my throat and, frankly, it had more spine than this office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
