const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 let deleteDigit = (n, s=`${n}`) =>
 Math.max( ...s.split("").map((_, i) => Number(s.slice(0, i) + s.slice(i+1))) );

module.exports = {
  deleteDigit
};
