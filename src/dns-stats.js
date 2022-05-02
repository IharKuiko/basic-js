const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 let _subdomains = s => s.split('.').reverse()
 .reduce((ss, s) => [(ss[0]||"")+"."+s, ...ss], [])
 .reverse();

let getDNSStats = domains =>
  domains.flatMap(_subdomains).reduce((o, k) => {
    o[k] = (o[k]||0)+1;
    return o;
  }, {});

module.exports = {
  getDNSStats
};
