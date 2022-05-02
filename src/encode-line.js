const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 let _dups = s => s.slice(1).split("").reduce((xs, c) => {
  let last = xs[xs.length-1];
  if (c == last[0])
    last[1]++;
  else
    xs.push([c, 1]);
  return xs;
}, [[s[0], 1]]);

let encodeLine = str =>
  str && _dups(str).map(([c, n]) => (n < 2 ? "" : `${n}`) + c).join("");

module.exports = {
  encodeLine
};
