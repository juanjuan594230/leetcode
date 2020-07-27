'use strict';

// 暴力破解
var maxArea1 = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            const width = height[i] > height[j] ? height[j] : height[i];
            const long = j - i;
            const area = width * long;
            if (maxArea < area) {
                maxArea = area;
            }
        }
    }
    return maxArea;
};

/**
 * 假设[i, ..., j]为选定的区间
 * 计算此时区间的面积area，假如面积大于maxArea，则交换
 * 接下来，[i, ..., j]区间的面积由最短的高度来决定，因此找出height[i]和height[j]中较小的那个
 * height[i] i++  or  height[j] j--;
 * 继续寻找更大的面积
 * @param {*} height 整形数组
 * time O(n)
 * space O(1)
 */
var maxArea2 = function(height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while( i < j ) {
        const width = j - i;
        const long = Math.min(height[i], height[j]);
        const area = width * long;
        if (area > maxArea) maxArea = area;
        if (long === height[i]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};