import isNumber = require("is-number");

function isPrime(value: number | string): boolean {
  if (!isNumber(value)) {
    throw new TypeError("expected a number");
  }

  const number = Number(value);

  if (!Number.isInteger(number)) {
    throw new Error("expected an integer");
  }

  if (!Number.isSafeInteger(number)) {
    throw new RangeError("value exceeds maximum safe integer");
  }

  const n = Math.abs(number);

  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

export = isPrime;
