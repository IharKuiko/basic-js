const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 let _sum = ns => ns.reduce((a, b) => a+b, 0);
 let _countChars = s => s.split("").reduce((o, c) => {
   o[c] = (o[c]||0)+1;
   return o;
 }, {});

 let getCommonCharacterCount = (s1, s2) => {
  let [o1, o2] = [s1, s2].map(_countChars);
  return _sum( Object.entries(o1).map(([k, v]) => Math.min(v, o2[k]||0)) );
};

module.exports = {
  getCommonCharacterCount
};
