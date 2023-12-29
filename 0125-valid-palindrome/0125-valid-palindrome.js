/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const searchBlank = /^\s*$/;
  const searchNotEnglish = /[^a-zA-Z0-9]/g;

  if (!!s.match(searchBlank)) return true;

  const newString = s.replace(searchNotEnglish,'').toLowerCase();
  const qoutient  = Math.floor(newString.length / 2);

  for (let i = 0; i < qoutient; i++) {

    if (newString[i] !== newString[newString.length - (i+1)]) {
      return false;
    }
  }
  
  return true;
};