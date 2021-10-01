/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * l1 = [2,4,3], l2 = [5,6,4]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   const num = l1.map((num, index) => {
//     return num + l2[index];
//   });
//   console.log(num);
// };
// addTwoNumbers([2, 4, 3], [5, 6, 4]);

// var addTwoNumbers2 = function (l1, l2) {
//   let arr = [];
//   let num;
//   let digit = 0;
//   for (let i = 0; i < l1.length; i++) {
//     num = l1[i] + l2[i];
//     if (num >= 10) {
//       arr.push(num-10+digit)
//     }

//     // const arr_total = arr.push(num);
//     // console.log(arr_total);
//   }
//   console.log(arr);
// };
// addTwoNumbers2([2, 4, 3], [5, 6, 4]);
// addTwoNumbers2([9, 9, 9], [9, 9, 9]);

const addTwoNumbers = (l1, l2) => {
  let answer = [];
  let nextDigit = 0;
  for (let i = 0; l1 < l2 ? i < l2.length : i < l1.length; i++) {
    if (l1[i] + l2[i] >= 10) {
      answer.push(l1[i] + l2[i] - 10 + nextDigit);
      nextDigit = 1;
      // console.log(answer);
      if (l1 < l2 ? i === l2.length - 1 : i === l1.length - 1) {
        answer.push(1);
        // console.log(answer);
      }
    } else {
      answer.push(l1[i] + l2[i] + nextDigit);
      nextDigit = 0;
    }
  }
  return answer;
};
// console.log(addTwoNumbers([3, 5, 7], [2, 4, 6]));
console.log(addTwoNumbers([1, 1, 1, 1], [9, 9, 9, 9]));
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
