'use strict';

const test1 = 'bbbbbbbb';
const test2 = '';
const test3 = '23556644567';
function lengthOfLongestSubstring(s) {
    let len = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            const subStrSet = new Set();
            let isRepeat = false;
            for(let k = i; k <= j; k++) {
                if (subStrSet.has(s[k])) {
                    isRepeat = true;
                    break;
                }
                subStrSet.add(s[k]);
            }
            if (!isRepeat && (j - i + 1) > len) {
                len = j - i + 1;
            }
        }
    }
    return len;
};

// console.log(lengthOfLongestSubstring(test1));
// console.log(lengthOfLongestSubstring(test2));
// console.log(lengthOfLongestSubstring(test3));

var lengthOfLongestSubstring2 = function(s) {
    if (s === '') {
        return 0;
    }
    const subStrSet = new Set();
    subStrSet.add(s[0]);
    let len = 1;
    let i = 0;
    let j = 1;
    while(j < s.length) {
        // if (subStrSet.has(s[j])) {
        //     while(s[i] !== s[j]) {
        //         subStrSet.delete(s[i]);
        //         i++;
        //     }
        //     subStrSet.delete(s[i]);
        //     i++;
        // }
        // if (subStrSet.has(s[j])) {
        //     while(subStrSet.has(s[j])) {
        //         subStrSet.delete(s[i]);
        //         i++;
        //     }
        // }
        while(subStrSet.has(s[j])) {
            subStrSet.delete(s[i]);
            i++;
        }
        subStrSet.add(s[j]);
        len = Math.max(len, j - i + 1);
        j++;
    }
    return len;
};


var lengthOfLongestSubstring3 = function(s) {
    if (s === '') {
        return 0;
    }
    const subStrMap = {};
    subStrMap[s[0]] = 0;
    let len = 1;
    let i = 0;
    let j = 1;
    while(j < s.length) {
        if(subStrMap[s[j]] !== undefined) {
            i = Math.max(i, subStrMap[s[j]] + 1);
        }
        subStrMap[s[j]] = j;
        len = Math.max(len, j - i + 1);
        j++;
    }
    return len;
};

const test = ' ';
function lengthOfLongestSubstring(s) {
    const subMap = new Map();
    let len = 0;
    let l = 0; // [l, ..., r]保存无重复元素的子串
    let r = -1;
    while(r + 1 < s.length) {
        r++;
        if (subMap.has(s[r]) && subMap.get(s[r]) + 1 > l) {
            l = subMap.get(s[r]) + 1;
        }
        len = Math.max(r - l + 1, len);
        subMap.set(s[r], r);
    }
    return len;
}
console.log(lengthOfLongestSubstring(test));