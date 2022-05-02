const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 const VALUE = new Object();
 const PREV = {
   double:  '--double-prev',
   discard: '--discard-prev',
 }, PREVS = Object.values(PREV);
 const NEXT = {
   double:  '--double-next',
   discard: '--discard-next',
 }, NEXTS = Object.values(NEXT);
 
 let ensureArray = x => {
   if (Array.isArray(x))
     return x;
   else
     throw Error("'arr' parameter must be an instance of the Array!");
 }

 let transform = arr => ensureArray(arr).reduce(({last, res}, x) => {
  if (NEXTS.includes(x))
    return {last: x, res};
  else if (!PREVS.includes(x))
    return (last === NEXT.discard ? {res} :
            {last: VALUE, res: res.concat(last !== NEXT.double ? [x] : [x, x])});
  else
    return {res: (last !== VALUE     ? res              :
                  x === PREV.discard ? res.slice(0, -1) :
                  [...res, ...res.slice(-1)])};
}, {res: []}).res;

module.exports = {
  transform
};
