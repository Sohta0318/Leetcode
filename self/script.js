/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 1; i < nums.length; i++) {
    let total = nums[i - 1] + nums[i];
    if (target === total) {
      return nums.indexOf(total);
    }
    console.log(total);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// var twoSum = function (nums, target) {
//   const arr = [];
//   arr.push(nums);
//   let substract;
//   for (let i = 0; i < nums.length; i++) {
//     substract = target - nums[i];
//     console.log(substract);
//     if(arr includes(substract)){
//       return indexOf(nums[i])
//   }
//   // console.log(nums);
// };
// };
