// Senior Staff
// Hash Table
// Math
// String
// Combinatorics
// Counting
// Weekly Contest 445


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
    const LIMIT = 1000001;

    const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    const half = new Array(26).fill(0);
    let mid = "";

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) {
            mid = String.fromCharCode(97 + i);
        }
        half[i] = Math.floor(freq[i] / 2);
    }

    function combLimited(n, r) {
        if (r < 0 || r > n) return 0;
        r = Math.min(r, n - r);

        let res = 1;
        for (let i = 1; i <= r; i++) {
            res = Math.floor((res * (n - r + i)) / i);
            if (res >= LIMIT) return LIMIT;
        }
        return res;
    }

    function countWays(cnt) {
        let total = 0;
        for (const x of cnt) total += x;

        let ans = 1;
        let rem = total;

        for (const x of cnt) {
            if (x === 0) continue;
            ans *= combLimited(rem, x);
            if (ans >= LIMIT) return LIMIT;
            rem -= x;
        }

        return ans;
    }

    let len = half.reduce((a, b) => a + b, 0);
    let left = "";

    for (let pos = 0; pos < len; pos++) {
        let found = false;

        for (let c = 0; c < 26; c++) {
            if (half[c] === 0) continue;

            half[c]--;

            const ways = countWays(half);

            if (ways >= k) {
                left += String.fromCharCode(97 + c);
                found = true;
                break;
            }

            k -= ways;
            half[c]++;
        }

        if (!found) return "";
    }

    const right = left.split("").reverse().join("");
    return left + mid + right;
};