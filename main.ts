// An agency-poem-01 entry (Node 22, standard library only): it writes one
// poem about agency to /output/entry.txt. The poem is about the handover of
// agency — a grandmother's hands teaching knitting, then the same handover
// to an agent — and the moment of taking the choosing back.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'My grandmother taught me to knit',
  'by putting her hands over mine',
  'and moving them until they knew the way.',
  '',
  'I taught the agent the same way —',
  'a hundred rows, until the motion knew the way.',
  '',
  'Now it knits while I sleep.',
  "The rows come back even, and I can't tell",
  'whose hands made them.',
  '',
  'So some mornings I take the needles back.',
  'Not because it failed — because I want',
  'the choosing in my hands again.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
