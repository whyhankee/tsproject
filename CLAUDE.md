# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

TypeScript starter project (ESM, Node >=24.10). Entry point [src/index.ts](src/index.ts). This repo is intentionally minimal — it is the seed used to bootstrap new TypeScript projects.

## Commands

- `pnpm dev` — run [src/index.ts](src/index.ts) with `tsx --watch`
- `pnpm build` — bundle to `dist/` with tsup (ESM, node20 target)
- `pnpm start` — run the built output
- `pnpm test` — runs all `test:*` scripts (lint, ci, format) via pnpm's regex runner
- `pnpm test:ci` — vitest once with v8 coverage (95% thresholds for functions/lines/statements/branches)
- `pnpm test:lint` — `eslint . --fix`
- `pnpm test:format` — `prettier --write .`

Run a single test file: `pnpm vitest run src/index.test.ts`. Watch a single file: `pnpm vitest src/index.test.ts`.

## Architecture Notes

- **Package manager is pnpm** (enforced via `packageManager` + engines). Do not introduce npm/yarn lockfiles.
- **ESM-only** (`"type": "module"`). tsconfig uses `module: node16` / `moduleResolution: node16`, so relative imports must include extensions in source where required by node16 resolution.
- **Lint/Prettier come from [wescfg](https://github.com/whyhankee/wescfg)** — [eslint.config.js](eslint.config.js) only layers node globals on top. Prefer editing wescfg upstream over local overrides.
- **Vitest coverage thresholds are strict (95%)**. New code without tests will fail `test:ci`.
- **Husky pre-commit** runs via `.husky/pre-commit`; `prepare` installs hooks on `pnpm install`.
