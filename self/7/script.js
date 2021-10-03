/**
 * @param {number} x
 * @return {number}
 */
var reverseNum = function (x) {
  let reverse = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) {
    reverse = -Math.abs(x).toString().split("").reverse().join("");
  }
  return reverse;
};
console.log(reverseNum(123));
console.log(reverseNum(-123));
console.log(reverseNum(0));
