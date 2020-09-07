'use strict';

function intersect(nums1, nums2) {
    const map1 = new Map();
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (map1.get(nums1[i])) {
            let value = map1.get(nums1[i]);
            map1.set(nums1[i], ++value);
        } else {
            map1.set(nums1[i], 1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map1.has(nums2[i]) && map1.get(nums2[i]) !== 0) {
            result.push(nums2[i]);
            let value = map1.get(nums2[i]);
            map1.set(nums2[i], --value);
        }
    }
    return result;
}

console.log(intersect([4,9,5,5], [9,4,9,8,4]));

// 延伸  假如数组是有序的呢？