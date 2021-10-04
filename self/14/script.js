/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    // console.log(strs[0][i]);
    for (let y = 1; y < strs.length; y++) {
      // console.log(strs[y]);
      // console.log(strs[0][i]);
      // console.log(strs[y][i]);
      if (strs[0][i] !== strs[y][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix([]));
