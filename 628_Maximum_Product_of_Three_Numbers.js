// Mid Level
// Array
// Math
// Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);

    let l = nums.length;

    let ans1 = nums[l - 1] * nums[l - 2] * nums[l - 3];
    let ans2 = nums[l - 1] * nums[0] * nums[1];

    return Math.max(ans1, ans2)

};