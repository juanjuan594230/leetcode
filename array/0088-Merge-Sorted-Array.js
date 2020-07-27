'use strict';

/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * nums1 = [1,2,3],nums2 = [2,5,6], output: [1,2,2,3,5,6]
 * @param {*} nums1
 * @param {*} nums2
 */
function mergeSortedArray(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const arr = nums1.concat(nums2);
    let i = 0;
    let j = len1;
    let index = 0;
    while(i < len1 - len2 && j < arr.length) {
        if(arr[i] <= arr[j]) nums1[index] = arr[i++];
        else nums1[index] = arr[j++];
        index++;
    }
    while(i < len1 - len2) {
        nums1[index++] = arr[i++];
    }
    while(j < arr.length) {
        nums1[index++] = arr[j++];
    }
    console.log('nums1', nums1);
}

// mergeSortedArray([1,2,3,0,0,0], [2,5,6]);

/**
 *
 *
 * @param {*} nums1
 * @param {*} nums2
 * @param {*} m nums1总有效数值的个数 nums1包含了两部分，有效数值部分和待插入的位置[1,2,3,0,0,0] m = 3 nums2中有3个元素待插入
 * @param {*} n
 */
function mergeSortedArray2(nums1, nums2, m, n) {
    for (let i = m + n - 1; i >= n; i--) {
        nums1[i] = nums1[i - n];
    }
    console.log('nums1', nums1);
    let index = 0;
    let j = nums1.length - m;
    let k = 0;
    while(j < nums1.length && k < n) {
        if (nums1[j] <= nums2[k]) {
            nums1[index++] = nums1[j++];
        } else {
            nums1[index++] = nums2[k++];
        }
    }
    while(j < nums1.length) {
        nums1[index++] = nums1[j++];
    }
    while(k < n) {
        nums1[index++] = nums2[k++];
    }
    console.log('nums1', nums1);
}

// mergeSortedArray2([1,2,3,0,0,0], [2,5,6], 3, 3);
mergeSortedArray2([0], [1], 0, 1);