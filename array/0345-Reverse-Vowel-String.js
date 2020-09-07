'use strict';

var reverseVowels = function(s) {
    const sArr = s.split('');
    const pattern = /^[aAeEiIoOuU]$/
    let l = 0;
    let r = sArr.length - 1;
    while(l < r) {
        if (pattern.test(sArr[l]) && pattern.test(sArr[r])) {
            const temp = sArr[l];
            sArr[l] = sArr[r];
            sArr[r] = temp;
            l++;
            r--;
        }
        while(l < sArr.length && !pattern.test(sArr[l])) {
            l++;
        }
        while(l < sArr.length && !pattern.test(sArr[r])) {
            r--;
        }
    }
    return sArr.join('');
};


var reverseVowels1 = function(s) {
    const pattern = /^[aeiouAEIOU]$/
    const strArr = s.split('');
    let i = 0;
    let j = s.length - 1;
    while(i <= j) {
        console.log(strArr[i], strArr[j]);
        console.log(i, j);
        if (pattern.test(strArr[i]) && pattern.test(strArr[j])) {
            const temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
            i++;
            j--;
        }
        if (!pattern.test(strArr[i])) {
            i++;

        }
        if (!pattern.test(strArr[j])) {
            j--;
        }
    }
    console.log('strArr', strArr);
    return strArr.join('');
};

console.log(reverseVowels1('race a car'));