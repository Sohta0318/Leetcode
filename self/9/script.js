/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reverseNum = x.toString().split("").reverse().join("");
  // console.log(reverseNum);
  if (x.toString() === reverseNum) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
