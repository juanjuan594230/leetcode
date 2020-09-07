'use strict';


function subSet(nums) {
    let index = 0;
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const subSet = [];
            for (let k = i; k <= j; k++) {
                subSet.push(nums[k]);
            }
            result[index++] = subSet;
        }
    }
    return result;
}

console.log(subSet([1,2,3]));