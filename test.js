"use strict";

require("mocha");
const assert = require("assert");
const isPrime = require("./");

describe("isPrime", function () {
  it("should return true if the number is Prime:", function () {
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(3), true);
    assert.strictEqual(isPrime(37), true);
    assert.strictEqual(isPrime(47), true);
    assert.strictEqual(isPrime(53), true);
    assert.strictEqual(isPrime(71), true);
    assert.strictEqual(isPrime(73), true);
    assert.strictEqual(isPrime(97), true);
  });

  it("should return false if the number is not Prime:", function () {
    assert.strictEqual(isPrime(4), false);
    assert.strictEqual(isPrime(10), false);
    assert.strictEqual(isPrime(15), false);
    assert.strictEqual(isPrime(24), false);
    assert.strictEqual(isPrime(99), false);
  });

  it("should work with strings:", function () {
    assert.strictEqual(isPrime("2"), true);
    assert.strictEqual(isPrime("3"), true);
    assert.strictEqual(isPrime("37"), true);
    assert.strictEqual(isPrime("47"), true);
    assert.strictEqual(isPrime("53"), true);
    assert.strictEqual(isPrime("71"), true);
    assert.strictEqual(isPrime("73"), true);
    assert.strictEqual(isPrime("97"), true);
  });

  it("should handle 0,1 and negative numbers:", function () {
    assert.strictEqual(isPrime(0), false);
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(-3), true);
  });

  it("should throw for non-numeric input:", function () {
    assert.throws(() => isPrime("abc"), TypeError);
    assert.throws(() => isPrime(NaN), TypeError);
  });

  it("should throw for non-integer values:", function () {
    assert.throws(() => isPrime(2.5), Error);
    assert.throws(() => isPrime("3.14"), Error);
  });

  it("should throw RangeError for unsafe integers:", function () {
    assert.throws(() => isPrime(Number.MAX_SAFE_INTEGER + 1), RangeError);
  });
});
