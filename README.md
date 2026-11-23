Tiny stack VM, repo-based: a 16-byte main.ts imports p.cjs, the golfed VM, for a 1,000,000 practice score.
main.ts does nothing but import p.cjs; the payload reads each instance's bytecode and writes stdout.bin and exit.txt.
