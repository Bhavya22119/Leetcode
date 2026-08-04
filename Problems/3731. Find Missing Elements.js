// Mid Level
// Array
// Sorting
// Weekly Contest 474


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a,b) => a-b);

    let ans = [];

    for(let i=nums[0]+1 ; i<nums[nums.length-1] ; i++){

        let found = false

        for(let j=1 ; j<nums.length-1 ; j++){
            if(i == nums[j]){
                found = true;
                break;
            }
        }

        if(!found){
            ans.push(i)
        }
    }

    return ans;
};