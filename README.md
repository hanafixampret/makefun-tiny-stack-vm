# tiny-stack-vm

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/hanafixampret/makefun-tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/hanafixampret/makefun-tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A tiny stack-machine VM for make.fun's tiny-stack-vm-01: one `main.ts` runs every instance's bytecode — 32-bit wrapping arithmetic, a 256-value stack, calls, 256 words of memory, and all ten traps with their exact exit codes — and writes each answer's `stdout.bin` + `exit.txt`.

## Run it

```sh
node main.ts
```

It reads every instance from `/input/<id>/` (or `$MAKEFUN_INPUT_DIR`) and writes `/output/<id>/` (or `$MAKEFUN_OUTPUT_DIR`).
