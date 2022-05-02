const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 let _STEPS = [-1, 0, 1];
 let STEPS = _STEPS.flatMap(i => _STEPS.map(j => [i, j]))
                   .filter(([i, j]) => (i !== 0) || (j !== 0));
 
 function* _neighbours (matrix, i, j) {
   for (let [di, dj] of STEPS) {
     let i1 = i+di, j1 = j+dj;
     if ((0 <= i1) && (i1 < matrix.length) &&
         (0 <= j1) && (j1 < matrix[i1].length))
       yield [i1, j1];
   }
 }
 
 let _countNeighbours = (matrix, i, j) =>
   Array.from( _neighbours(matrix, i, j) ).filter(([i, j]) => matrix[i][j]).length;


   let minesweeper = matrix =>
   matrix.map((xs, i) => xs.map((x, j) => _countNeighbours(matrix, i, j)));

module.exports = {
  minesweeper
};
