const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 const MINUTE = 60, HOUR = 60*MINUTE;

 let _turns = n => 1 + 2*(n <= 1 ? 0 : _turns(n-1));

 let calculateHanoi = (disksNumber, turnsSpeed) => {
  let turns = _turns(disksNumber);
  return {turns, seconds: Math.floor(turns * HOUR / turnsSpeed)};
};

module.exports = {
  calculateHanoi
};
