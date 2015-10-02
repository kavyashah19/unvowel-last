// Dependencies
var IsVowel = require("is-vowel");

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
    if (IsVowel(input.slice(-1))) {
        return input.slice(0, -1);
    }
    return input;
}

module.exports = UnvowelLast;
