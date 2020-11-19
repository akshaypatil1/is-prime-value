'use strict';

require('mocha');
const assert = require('assert');
const isPrime = require('./');

describe('isPrime', function() {
  it('should return true if the number is Prime:', function() {
    assert(isPrime(2));
    assert(isPrime(3));
    assert(isPrime(37));
    assert(isPrime(47));
    assert(isPrime(53));
    assert(isPrime(71));
    assert(isPrime(73));
    assert(isPrime(97));
  });

  it('should return false if the number is not Prime:', function() {
    assert(!isPrime(4));
    assert(!isPrime(10));
    assert(!isPrime(15));
    assert(!isPrime(24));
    assert(!isPrime(99));
  });

  it('should work with strings:', function() {
    assert(isPrime('2'));
    assert(isPrime('3'));
    assert(isPrime('37'));
    assert(isPrime('47'));
    assert(isPrime('53'));
    assert(isPrime('71'));
    assert(isPrime('73'));
    assert(isPrime('97'));
  });

});