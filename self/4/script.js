/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  let num;
  if (arr.length === 1) {
    num = arr[1];
  }
  if (arr.length % 2 === 0) {
    num = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    num = arr[Math.round(arr.length / 2 - 1)];
  }
  console.log(num);
};
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 3], [5]);
findMedianSortedArrays([1, 3], [2, 4]);
findMedianSortedArrays([1], []);
findMedianSortedArrays([0], [0]);
findMedianSortedArrays([1, 3], [5, 9, 12]);
