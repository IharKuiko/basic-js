const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 let _sum = ns => ns.reduce((a, b) => a+b, 0);
 let _propagateZeroes = matrix => matrix.reduce((xss, xs) => {
   let last = xss[xss.length-1];
   xss.push(!last ? xs : xs.map((x, i) => (last[i] === 0 ? 0 : x)));
   return xss;
 }, []);

 let getMatrixElementsSum = matrix => _sum( _propagateZeroes(matrix).map(_sum) );

module.exports = {
  getMatrixElementsSum
};
