/**
 * Shift negative numbers to end.
 * Input - [3, 5, -2, -6, 34, 12, -7, -11, -1, 23, 19]
 * Output - [3, 5, 34, 12, 23, 19, -2, -6, -7, -11, -1]
 */

function shift(arr) {
    let posArr = [];
    let negArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) negArr.push(arr[i]);
        else posArr.push(arr[i]);
    }
    return posArr.concat(negArr);
}

let arr = [3, 5, -2, -6, 34, 12, -7, -11, -1, 23, 19]
console.log(shift(arr));