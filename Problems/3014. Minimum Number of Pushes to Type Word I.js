// Mid Level
// Math
// String
// Greedy
// Weekly Contest 381

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let count = 0;

    for(let i=1 ; i<=word.length ; i++){
        let x = Math.ceil(i/8);
        count += x;
    }

    return count;
};