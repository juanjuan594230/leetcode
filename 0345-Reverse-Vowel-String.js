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