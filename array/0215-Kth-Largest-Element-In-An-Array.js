'use strict';


function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * @param {*} nums
 * @param {*} k
 */
function kthLargestElem(nums, k) {
    let currentMax;
    let currentIndex;
    for(let i = 0; i < k; i++) {
        currentMax = nums[i];
        currentIndex = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > currentMax) {
                currentMax = nums[j];
                currentIndex = j;
            }
        }
        if (currentIndex !== i) swap(nums, i, currentIndex);
    }
    console.log('nums', nums);
    return nums[k-1];
}

// console.log(kthLargestElem([3,2,3,1,2,4,5,5,6], 4));
// console.log(kthLargestElem([3,2,1,5,6,4], 2));

/**
 * quick sort
 *
 * @param {*} nums
 * @param {*} k
 * @returns
 */
function kthLargestElem2(nums, k) {
    let l = 0;
    let r = nums.length - 1;
    let index = partition(nums, l, r);
    while(index !== k - 1) {
        if (index < k - 1) {
            l = index + 1
        } else {
            r = index - 1;
        }
        index = partition(nums, l, r);
    }
    return nums[index];
}

function partition(nums, l, r) {
    const flag = nums[l];
    let i = l + 1;
    let j = l + 1;
    for (i; i <= r; i++) {
        if (nums[i] > flag) {
            swap(nums, i, j);
            j++;
        }
    }
    swap(nums, l, j - 1);
    return j - 1;
}

// kthLargestElem2([3,2,3,1,2,4,5,5,6], 4);
console.log(kthLargestElem2([3,2,1,5,6,4], 2));