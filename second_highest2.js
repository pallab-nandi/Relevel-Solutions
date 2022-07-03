/**
 * 1. we sort the array in ascending manner using sort().
 * 2. we choose index = [-2] for 2nd highest.
 */


function secondHighest(val) {
    val.sort((a, b) => a - b);
    return val[val.length - 2]
}

let arr = [2,6,1,34,23,64,12,9];
console.log(secondHighest(arr));