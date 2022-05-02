const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 let _repeat = (times, sep, s) => Array.from({length: times}, _ => `${s}`).join(sep);

let repeater = (str, {repeatTimes=1, separator="+", addition="", additionRepeatTimes=1, additionSeparator="|"}) =>
  _repeat(repeatTimes, separator, str + _repeat(additionRepeatTimes, additionSeparator, addition));

module.exports = {
  repeater
};
