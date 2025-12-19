# is-prime-value

Small utility to check whether a value is a prime number. Returns `true` for prime integers, `false` otherwise.

This package now ships TypeScript sources (`src/`) and builds to `lib/` during publishing or when running the included `prepare` script.

## Installation

From npm (recommended):

```bash
npm install is-prime-value
```

If you install directly from this Git repository, build artifacts are not committed — run the build step locally after installing:

```bash
npm install
npm run build
```

When publishing, the `prepare` script will run automatically to generate `lib/` and type declarations.

## Usage (JavaScript)

```javascript
const isPrime = require("is-prime-value");

console.log(isPrime(47)); // true
console.log(isPrime(1)); // false
console.log(isPrime(100)); // false
console.log(isPrime("2")); // true (numeric string accepted)
```

## Usage (TypeScript)

Type definitions are provided. Example:

```ts
import isPrime = require("is-prime-value");

isPrime(7); // true

// or with esModuleInterop enabled
// import isPrime from 'is-prime-value';
```

## Behavior & validation

- Accepts numbers and numeric strings (uses `is-number` internally).
- Throws `TypeError` for non-numeric values.
- Throws `Error` for non-integer numeric values.
- Throws `RangeError` for values outside `Number.MAX_SAFE_INTEGER`.
- Negative numbers are treated by absolute value (e.g., `-3` is prime).

Algorithm: trial division up to `sqrt(n)` with even-number short-circuiting (O(sqrt(n))).

## Development

Build and test locally:

```bash
npm install
npm run build
npm test
```

## Notes

- The repository keeps TypeScript sources in `src/`. The `lib/` directory is a build artifact and is ignored by `.gitignore`.
- The package includes a `prepare` script so `npm publish` and installs from git will build before publish.

## License

ISC
