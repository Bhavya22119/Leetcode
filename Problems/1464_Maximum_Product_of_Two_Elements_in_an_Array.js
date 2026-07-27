// Mid Level
// Array
// Sorting
// Heap (Priority Queue)
// Weekly Contest 191

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => a-b);

    let i = nums.length-2;
    let j = nums.length-1;

    let ans = (nums[i]-1)*(nums[j]-1);

    return ans;
};