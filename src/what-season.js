const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const SEASONS = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer',
 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

let _isDate = date => {
try {
return (date instanceof Date) && date.toJSON();
} catch (e) {}
}

let getSeason = date => {
  if (date === undefined)
    return "Unable to determine the time of year!";
  if (!_isDate(date))
    throw Error("Invalid date!");
  return SEASONS[ date.getMonth() ];
};

// function getSeason(date) {

//   console.log(date)
//   date.getMonth();
//   console.log(date.getMonth());
// }

// getSeason(new Date(2020, 11, 31))

module.exports = {
  getSeason
};
