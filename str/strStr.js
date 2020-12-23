var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    const haystackLen = haystack.length;
    const needleLen = needle.length;
    for(let i = 0; i < haystackLen - needleLen + 1; i++) {
        for(let j = 0; j < needleLen; j++) {
            if (haystack[i + j] === needle[j]) {
                if (j === needleLen - 1) {
                    return i;
                }
            } else {
                break;
            }
        }
    }
    return -1;
};

console.log(strStr('hello', 'll'));