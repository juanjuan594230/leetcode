'use strict';

/**
 * input: array nums
 * 移动所有的0到数组的末尾，保持非零元素的相对位置不变
 */

/**
 * solution1: 暴力破解大法  new space
 */

const nums1 = [0,1,0,3,12];
function moveZeros(nums) {
    const arrZerosEnd = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arrZerosEnd.push(nums[i]);
        }
    }
    for (let i = arrZerosEnd.length; i < nums.length; i++) {
        arrZerosEnd[i] = 0;
    }
    return arrZerosEnd;
}

console.log(moveZeros(nums1));


/**
 * 要求：原地发生交换，不开辟新空间
 * solution2: 移动非零元素，最后完成补零操作
 */

function moveZeros2(nums) {
    let i = 0;
    let j = -1;
    while(i < nums.length) {
        if (nums[i] !== 0) {
            nums[++j] = nums[i];
        }
        i++;
    }
    for(let k = j + 1; k < nums.length; k++) {
        nums[k] = 0;
    }
    console.log('nums', nums);
}

moveZeros2(nums1);

// 有木有可能在完成非零元素的左移操作之后，零元素也放在了数组的最右边？？

function moveZeros3(nums) {
    let j = 0; // [j,...,i)存放非零元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++
        }
    }
    console.log('nums', nums);
}

moveZeros3(nums1);

// 当数组全部都为非零元素时，moveZeros3每次都会发生交换。
function moveZeros4(nums) {
    let j = 0; // [j,...,i)存放非零元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== j) {
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            } else {
                j++
            }
        }
    }
    console.log('nums', nums);
}

// 总结：优化可能出现在特殊案例的场景下