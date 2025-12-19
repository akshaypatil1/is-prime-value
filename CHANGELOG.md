# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2025-12-19

- Added TypeScript source (`src/index.ts`) and TypeScript build configuration (`tsconfig.json`).
- Improved prime test algorithm from O(n) to O(sqrt(n)) (trial division up to sqrt(n) and skip even numbers).
- Added TypeScript declarations generation and `types` entry in `package.json`.
- Added stricter validation: throws `TypeError` for non-numeric values, `Error` for non-integers, and `RangeError` for unsafe integers.
- Added additional unit tests covering edge cases (non-numeric, non-integer, negative, zero, unsafe integers).
- Switched repository to keep source-only (`src/`) and ignore build artifacts (`lib/`). Added `prepare` script to build before publish.
- Updated `README.md` with TypeScript usage and build/publish notes.

## [1.0.0] - original

- Initial published implementation (naive O(n) trial division, basic README).
