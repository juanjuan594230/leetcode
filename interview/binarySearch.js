'use strict';

/**
 *
 *
 */
function findMinLargest(chars, char) {
    let start = 0;
    let end = chars.length - 1;
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if (chars[mid] <= char) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    console.log('start', start);
    console.log('end', end);
    return start >=  chars[start] ? chars[satrt] : chars[0];
}

console.log(findMinLargest(['a', 'b', 'c', 'd'], 'a'));
console.log(findMinLargest(['a', 'b', 'c', 'd'], 'e'));
console.log(findMinLargest(['b', 'c', 'd'], 'a'));