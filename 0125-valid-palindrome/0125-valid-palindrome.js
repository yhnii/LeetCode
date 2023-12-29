/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const newString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  const qoutient  = Math.floor(newString.length / 2);

  for (let i = 0; i < qoutient; i++) {

    if (newString[i] !== newString[newString.length - (i+1)]) {
      return false;
    }
  }
  return true;
};