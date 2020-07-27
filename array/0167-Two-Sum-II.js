'use strict';

/**
 * 数组有序，内层查找使用了二分查找
 * @param {*} numbers
 * @param {*} target
 * time O(nlogn)
 * space O(1)
 */
var twoSum1 = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        // [l,...,r]的区间中查找
        let l = i + 1;
        let r = numbers.length - 1;
        while( l <= r ) {
            const mid = Math.floor((l + r) / 2);
            if (numbers[i] + numbers[mid] === target) {
                return [i + 1, mid + 1];
            } else if (numbers[i] + numbers[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
};


/**
 * 对撞指针
 * @param {*} numbers
 * @param {*} target
 */
var twoSum2 = function(numbers, target) {
    let l = 0;
    let r = numbers.length;
    while(l < r) {
        if (numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1];
        } else if (numbers[l] + numbers[r] < target) {
            l++;
        } else {
            r--;
        }
    }
};