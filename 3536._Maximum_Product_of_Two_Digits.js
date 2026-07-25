// Mid Level
// Math
// Sorting
// Weekly Contest 448

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const array = n.toString().split('').map(Number);

    array.sort((a,b)=> a-b);

    const l = array.length

    const ans = array[l-1]*array[l-2]

    return ans
};