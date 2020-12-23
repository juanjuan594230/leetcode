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
// console.log(lengthOfLongestSubstring(test));

function lengthOfLongestSubstring5(s) {
    const charMap = new Map();
    let longestSubstrLen = 0;
    let i = 0;
    let j = -1; // [i,...,j]中保存当前无重复元素的子数组
    while(i < s.length) {
        if (j + 1 < s.length) {
            if (charMap.get(s[j + 1]) === undefined) {
                j++;
                charMap.set(s[j], j);
            } else {
                j++;
                if (charMap.get(s[j]) >= i) {
                    i = charMap.get(s[j]) + 1; // 错在不判断当前重复的元素是否在子串中，就给i赋值
                }
                charMap.set(s[j], j);
            }
            longestSubstrLen = Math.max(longestSubstrLen, j - i + 1);
        } else {
            longestSubstrLen = Math.max(longestSubstrLen, j - i + 1);
            break;
        }
    }
    // 优化1
    // while(i < s.length) {
    //     if (j + 1 < s.length) {
    //         j++;
    //         if (charMap.has(s[j]) && charMap.get(s[j]) >= i) {
    //             i = charMap.get(s[j]) + 1;
    //         }
    //         charMap.set(s[j], j);
    //         longestSubstrLen = Math.max(longestSubstrLen, j - i);
    //     } else {
    //         longestSubstrLen = Math.max(longestSubstrLen, j - i + 1);
    //         break;
    //     }
    // }
    // 优化2
    // while (j + 1 < s.length) {
    //     j++;
    //     if (charMap.has(s[j]) && charMap.get(s[j]) >= i) {
    //         i = charMap.get(s[j]) + 1;
    //     }
    //     charMap.set(s[j], j);
    //     longestSubstrLen = Math.max(longestSubstrLen, j - i);
    // }
    // return longestSubstrLen;
}

// console.log(lengthOfLongestSubstring5('abcabcbb'));
// console.log(lengthOfLongestSubstring5('bbbbbb'));
// console.log(lengthOfLongestSubstring5('pwwkew'));
// console.log(lengthOfLongestSubstring5(' '));
// console.log(lengthOfLongestSubstring5('abba'));

// 20200907 review
function lengthOfLongestSubstring907(s) {
    const map = {};
    let len = 0;
    let i = 0;
    let j = -1;
    while(j + 1 < s.length) {
        // if(map[s[j + 1]] === undefined) {
        //     map[s[j + 1]] = j + 1;
        //     j++;
        //     len = Math.max(len, j - i + 1);
        // } else {
        //     const repeatIndex = map[s[j + 1]];
        //     i = i >= repeatIndex + 1 ? i : repeatIndex + 1; // 这一步一定要考虑啊
        //     map[s[j + 1]] = j + 1;
        //     j++;
        //     len = Math.max(len, j - i + 1);
        // }
        j++;
        if (map[s[j]] !== undefined && map[s[j]] >= i) {
            const repeatIndex = map[s[j]];
            i = repeatIndex + 1;
        }
        map[s[j]] = j;
        len = Math.max(len, j - i + 1);
    }
    return len;
}

console.log(lengthOfLongestSubstring907('abcabcbb')); //
console.log(lengthOfLongestSubstring907('bbbbbb')); //
console.log(lengthOfLongestSubstring907('pwwkew')); //
console.log(lengthOfLongestSubstring907(' ')); //
console.log(lengthOfLongestSubstring907('abba')); //