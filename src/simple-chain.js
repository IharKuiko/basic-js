const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  _links: [],

  getLength () {return this._links.length},

  addLink (value="") {
    this._links.push(value);
    return this;
  },

  removeLink (position) {
    if (!Number.isInteger(position) || (position < 1) || (position > this.getLength())) {
      this._links = [];
      throw Error("You can't remove incorrect link!");
    }
    this._links.splice(position-1, 1);
    return this;
  },

  reverseChain () {
    this._links.reverse();
    return this;
  },

  finishChain () {
    let result = this._links.map(s => `( ${s} )`).join("~~");
    this._links = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
