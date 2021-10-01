"use strict";
/**
 * @param {string} s
 * @return {number}
 */

// var lengthOfLongestSubstring = function (s) {
//   const s2 = s.split("");
//   let count = s2.length;
//   // const s3 = s2.filter(
//   //   (num, i, arr) => arr.indexOf(num) !== arr.lastIndexOf(num)
//   // );
//   const s3 = s2.filter((num, i) => num === s[i]);
//   console.log(s3);

//   const final = count - s3.length;
//   console.log(final);
// };

// var lengthOfLongestSubstring = function (s) {
//   let count = {};
//   const len = s.split("");
//   // const lon = len.length;
//   // let how = 0
//   len.forEach(function (i) {
//     count[i] = (count[i] || 0) + 1;
//   });
//   // if (Object.values(count) < 1) {
//   //   how = lon - //use filter and subtract number that has more than 1 untill they are 1
//   console.log(count);
// };
// // console.log(lon);
// // };

var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let start = 0;
  let cur = 0;

  let arr = new Set();

  while (cur < s.length) {
    if (arr.has(s[cur])) {
      arr.delete(s[start]);
      start++;
    } else {
      arr.add(s[cur]);
      answer = Math.max(answer, arr.size);
      cur++;
    }
  }
  console.log(arr);
  console.log(answer);
};

lengthOfLongestSubstring("abcabcbb"); //abc --> answer 3 arr.size --> 1
lengthOfLongestSubstring("bbbbb"); // bbbb --> answer 1   arr.size --> 1
lengthOfLongestSubstring("pwwkew"); //pw --> answer 2  arr.size --> 3
lengthOfLongestSubstring("ab");
