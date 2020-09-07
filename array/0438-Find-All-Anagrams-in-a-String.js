'use strict';

const test = 'cbaebabacd';
const p = 'abc'

const test2 = 'abab';
const p2 = 'ab'

var findAnagrams = function(s, p) {
    const posArr = [];
    const pLen = p.length;
    const pArr = new Array(26);
    for (let i = 0; i < pLen; i++) {
        const index = p[i].charCodeAt() - 'a'.charCodeAt();
        pArr[index] !== undefined
            ? pArr[index] += 1
            : pArr[index] = 1;
    }
    for (let i = 0; i < s.length - pLen + 1; i++) {
        const j = i + pLen - 1;
        const subArr = new Array(26);
        let flag = true;
        for(let k = i; k <= j; k++) {
            const index = s[k].charCodeAt() - 'a'.charCodeAt();
            subArr[index] !== undefined
            ? subArr[index] += 1
            : subArr[index] = 1;
        }
        for (let l = 0; l < pArr.length; l++) {
            if (pArr[l] !== subArr[l]) {
                flag =  false;
                break;
            }
        }
        if (flag) {
            posArr.push(i);
        }
    }
    return posArr;
};

console.log(findAnagrams(test, p));
console.log(findAnagrams(test2, p2));

function findAnagrams2(s, p) {
    const posArr = []; // store output index array
    const pArr = []; // store p
    // set pArr
    for (let i = 0; i < pLen; i++) {
        const index = p[i].charCodeAt() - 'a'.charCodeAt();
        pArr[index] !== undefined
            ? pArr[index] += 1
            : pArr[index] = 1;
    }
    let l = 0;
    let r = -1;
    let subArr = [];
    while(r + 1 < s.length) {
        r++;
        const index = p[r].charCodeAt() - 'a'.charCodeAt();
        subArr[index] !== undefined
            ? subArr[index] += 1
            : subArr[index] = 1;
        if (r - l + 1 === p.length && same(pArr, subArr)) {
            posArr.push(l);
        }
        // 大于了怎么办？？？
    }
    return posArr;
}

function same(arr1, arr2) {
    for (let l = 0; l < arr1.length; l++) {
        if (arr1[l] !== arr2[l]) {
            return false;
        }
    }
    return true;
}