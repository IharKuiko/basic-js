const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const ABC = ["ABCDE", "FGHIJ", "KLMNO", "PQRST", "UVWXY", "Z"].join("");
 const LEN = ABC.length;
 
 let _char = c => c.toUpperCase()[0];
 let _idx = c => _char(c).charCodeAt(0) - ABC.charCodeAt(0);
 
 let _encStr = (s, key, dec) => s.split("").reduce(({key, res}, c) => {
   if (ABC.includes(_char(c))) {
     c   = ABC[(_idx(c) + _idx(key)*(dec ? -1 : 1) + LEN) % LEN];
     key = key.slice(1) + key[0];
   }
   return {key, res: res + c};
 }, {key, res: ""}).res;

 class VigenereCipheringMachine {
  constructor (direct=true) {this._reverse = !direct}

  _convert = s => (!this._reverse ? s : s.split("").reverse().join(""));

  encrypt = (message, key) => {
    if (!message || !key)
      throw Error("Incorrect arguments!");
    return this._convert( _encStr(message, key) );
  }
  decrypt = (encryptedMessage, key) => {
    if (!encryptedMessage || !key)
      throw Error("Incorrect arguments!");
    return this._convert( _encStr(encryptedMessage, key, 'decode') );
  };
}

module.exports = {
  VigenereCipheringMachine
};
