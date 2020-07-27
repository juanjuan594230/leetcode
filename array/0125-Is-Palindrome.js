'use strict';

const test = "race a car";

var isPalindrome = function(s) {
    const pattern = /[a-zA-Z0-9]/;
    let l = 0;
    let r = s.length -1;
    while(l <= r) {
        if (pattern.test(s[l]) && pattern.test(s[r])) {
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
            continue;
        }
        if (!pattern.test(s[l])) {
            l++;
        }
        if (!pattern.test(s[r])) {
            r--;
        }
    }
    return true;
};

var isPalindrome2 = function(s) {
    const pattern = /[a-zA-Z0-9]/;
    let l = 0;
    let r = s.length -1;
    while(l <= r) {
        if (pattern.test(s[l]) && pattern.test(s[r])) {
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
            continue;
        }
        while (!pattern.test(s[l])) {
            l++;
        }
        while (!pattern.test(s[r])) {
            r--;
        }
    }
    return true;
};