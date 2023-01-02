/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
*/
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * {
  '1': [
    0, 0, 1, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '2': [
    0, 0, 1, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '3': [
    0, 1, 1, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '4': [
    0, 1, 1, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '5': [
    0, 1, 1, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '6': [
    0, 1, 2, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '7': [
    0, 1, 2, 1, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '8': [
    0, 1, 2, 3, 1,
    2, 2, 3, 3, 4
  ]
}
{
  '9': [
    0, 1, 2, 3, 1,
    2, 2, 3, 3, 4
  ]
}

 * 
 * 
 */
/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log({[i]:nums})
    if (nums[i] != nums[i-1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0,k);
};
console.log(removeDuplicates(nums));
