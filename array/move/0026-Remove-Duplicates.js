'use strict';

/**
 * 删除排序数组中的重复项，每个元素只出现一次，返回新的数组长度
 * input: [0,0,1,1,1,2,2,3,3,4] output: [0,1,2,3,4]
 * @param {*} nums
 */

const nums1 = [0,0,1,1,1,2,2,3,3,4];
function removeDuplicates(nums) {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[j - 1]) {
            // const temp = nums[j];
            // nums[j] = nums[i];
            // nums[i] = temp;
            nums[j] = nums[i];
            j++;
        }
    }
    console.log('nums', nums);
    console.log('len', j);
    return j;
}

removeDuplicates(nums1);

