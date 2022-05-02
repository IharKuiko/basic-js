const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 let _sum = ns => ns.reduce((a, b) => a+b, 0);
 let _sumDigits = n => _sum( `${n}`.split("").map(Number) );

let getSumOfDigits = n => (n < 10 ? n : getSumOfDigits( _sumDigits(n) ));

module.exports = {
  getSumOfDigits
};
