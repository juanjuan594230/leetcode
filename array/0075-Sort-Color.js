'use strict';

/**
 * Given an array with n objects colored red, white or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white and blue.
 * input:[2,0,2,1,1,0] output:[0,0,1,1,2,2]
 * 三路快排一次分治
 * @param {*} nums
 */

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sortColor(nums) {
    let lt = -1;
    let gt = nums.length;
    let i = 0;
    while(i < gt) {
        if (nums[i] === 1) {
            i++;
        } else if (nums[i] > 1) {
            swap(nums, i, --gt);
        } else {
            swap(nums, i, ++lt);
            i++;
        }
    }
    console.log('nums', nums);
}

sortColor([2,0,2,1,1,0]);