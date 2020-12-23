'use strict';

/**
 * Given two arrays, write a function to compute their intersection.
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * @param {*} nums1
 * @param {*} nums2
 */

function intersect(nums1, nums2) {
    const intersect = [];
    const map1 = new Map();
    for (const num of nums1) {
        if (map1.has(num)) {
            let value = map1.get(num);
            map1.set(num, value + 1);
        } else {
            map1.set(num, 1);
        }
    }

    for (const num of nums2) {
        const value = map1.get(num);
        if (value && value > 0) {
            intersect.push(num);
            map1.set(num, value - 1);
        }
    }

    return intersect;
}

const nums1 = [1,2,2,1];
const nums2 = [2,2];
console.log(intersect(nums1, nums2));

// 扩展 假如数组有序呢？