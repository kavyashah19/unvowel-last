// Dependencies
var IsVowel = require("is-vowel")
  , RemoveLastChar = require("remove-last-char")
  , LastChar = require("last-char")
  ;

/**
 * UnvowelLast
 * Removes the last letter if it is a vowel.
 *
 * @name UnvowelLast
 * @function
 * @param {String} input The input string.
 * @return {String} The input string if the last letter was *not* a vowel, otherwise the same value, but without the last letter.
 */
function UnvowelLast(input) {
    if (IsVowel(LastChar(input))) {
        return RemoveLastChar(input);
    }
    return input;
}

module.exports = UnvowelLast;
