'use strict';

/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Given nums = [3,2,2,3], val = 3, return length = 2, nums the first two elem is 2
 * @param {*} nums
 * @param {*} value
 */
const nums1 = [3, 2, 2, 3];
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
function removeElement(nums, value) {
    let j = 0; // [j,...,i)保存值不为value的元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== value) {
            if (i !== j) {
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
            j++;
        }
    }
    console.log('nums', nums);
    console.log('j', j);
    return j;
}

removeElement(nums1, 3);
removeElement(nums2, 2);
