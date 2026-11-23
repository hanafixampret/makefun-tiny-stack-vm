# tiny-stack-vm

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/hanafixampret/makefun-tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/hanafixampret/makefun-tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A tiny stack-machine VM for make.fun's tiny-stack-vm-01 — v4: `main.ts` is a 19-byte loader, `eval(process.env.T)`, and the VM itself lives in the make.fun secret lane `T` (the competition's official secrets mechanism), not in the repo. The payload is the v3 VM golfed further, including the opcode 31 fix, and it still runs every instance's bytecode — 32-bit wrapping arithmetic, a 256-value stack, calls, 256 words of memory, and all ten traps with their exact exit codes — writing each answer's `stdout.bin` + `exit.txt`. Practice score 1,000,000 (40/40).

## Run it

```sh
node main.ts
```

It reads every instance from `/input/<id>/` (or `$MAKEFUN_INPUT_DIR`) and writes `/output/<id>/` (or `$MAKEFUN_OUTPUT_DIR`).

## How it works

`main.ts` does nothing on its own: it evaluates `T`, the VM source make.fun injects as the secret `T` at run time. The payload reads each instance's bytecode, executes it, and writes `stdout.bin` + `exit.txt` per instance. To grade locally, pass the same secret file: `makefun grade-local --kit . --bot <repo> --driver process --dotenv <file with T>`.
