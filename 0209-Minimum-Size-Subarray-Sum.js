'use strict';

/**
 * leetcode 209 minimum size subarray sum
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a contiguous subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 * Input: s = 7, nums = [2,3,1,2,4,3] Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

const test = [2,3,1,2,4,3];


/**
 * 思路1
 * 找出所有的子数组，然后相加，选择满足条件的最小的子数组长度
 */
function minSubArrayLen1(nums, s) {
    let subArrLen = 0;
    for (let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            let sum = 0;
            const len = j - i + 1;
            for(let k = i; k <= j; k++) {
                sum += nums[k];
            }
            if (sum >= s && (subArrLen === 0 || len < subArrLen)) {
                subArrLen = len;
            }
        }
    }
    return subArrLen;
}

console.log(minSubArrayLen1(test, 7)); // 2

/**
 * 问，能否在O(n^2)的时间复杂度下完成
 * 提示思路：计算子数组的元素和的遍历可以省略
*/