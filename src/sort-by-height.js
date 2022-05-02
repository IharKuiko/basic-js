const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

 let _reverseNumCmp = (a, b) => b - a;

let sortByHeight = arr => {
  let vals = arr.filter(x => x !== -1).sort(_reverseNumCmp);
  return arr.map(x => (x === -1 ? x : vals.pop()));
};

module.exports = {
  sortByHeight
};
