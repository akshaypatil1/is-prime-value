'use strict';

const isNumber = require('is-number');

module.exports = function isPrime(value) {
    let number = Math.abs(value);
    if (!isNumber(number)) {
        throw new TypeError('expected a number');
    }
    if (!Number.isInteger(number)) {
        throw new Error('expected an integer');
    }
    if (!Number.isSafeInteger(number)) {
        throw new Error('value exceeds maximum safe integer');
    }
    let isPrime = true;
    if (number === 1) {
        return false;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
    else {
        return false;
    }
};