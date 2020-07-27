'use strict';

/**
 * Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
 * Given nums = [0,0,1,1,1,1,2,3,3]
 * Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
 *
 * @param {*} nums
 */
function removeDuplicates(nums) {
    if (nums.length <= 2) {
         return nums.length;
    }
    let j = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > nums[j - 2]) {
            // [ 0, 0, 1, 1, 2, 3, 3, 1, 1 ]
            const temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            // nums[j] = nums[i]; // [ 0, 0, 1, 1, 2, 3, 3, 3, 3 ]
            j++;
        }
    }
    console.log('nums', nums);
    console.log('len', j);
    return j;
}

removeDuplicates([0,0,1,1,1,1,2,3,3]);