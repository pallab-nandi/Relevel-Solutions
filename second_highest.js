/**
 * 1. we sort the array in descending manner.
 * 2. we choose index = 1 for 2nd highest.
 */


function secondHighest(val) {
    for(let i = 0; i < (val.length - 1); i++) {
        if(val[i] < val[i + 1]) {
            let temp = val[i];
            val[i] = val[i + 1];
            val[i + 1] = temp;
        }
    }

    for(let j = 0; j < (val.length - 1); j++) {
        if(val[j] < val[j + 1]) {
            return secondHighest(val);
        }
    }
    return val[1];
}

let arr = [2,6,1,34,23,64,12,9];
console.log(secondHighest(arr));