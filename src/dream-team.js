const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
members = ['Matt', 'Ann', 'Dmitry', 'Max'];
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let name = [];
  let strName = '';
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        members[i] = members[i].trim();
        name.push(members[i][0].toUpperCase());
      }
    }
    name.sort();
    for (let i = 0; i < name.length; i++){
      strName += name[i]
    }
    // if (strName === '') return false
    if (strName === '') {
      return false;
    } else {
      return strName;
    }
  } else {
    return false;
  }
  
  // console.log(strName)
}

// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);
module.exports = {
  createDreamTeam
};
