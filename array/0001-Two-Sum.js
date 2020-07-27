'use strict';

const test = [0, 4, 3, 0];

// 暴力破解
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// console.log(twoSum(test, 0));

function twoSum2(nums, target) {
    const indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        indexMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        const j = target - nums[i];
        // 不能是同一个元素
        if ( indexMap[j] && indexMap[j] !== i ) {
            return [i, indexMap[j]];
        }
    }
};

// console.log(twoSum2(test, 0));

// 不先对数组循环赋值到map中
function twoSum3(nums, target) {
    const indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        const j = target - nums[i];
        if ( indexMap[j] !== undefined) {
            return [indexMap[j], i];
        }
        indexMap[nums[i]] = i;
    }
};

console.log(twoSum3([2, 7, 11, 15], 9));