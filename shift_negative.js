//shifting negative numbers.

function shift(arr) {
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) return shift(arr);
    }
    return arr;
}

let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
console.log(shift(arr));

//sorry I just only think to do sort in descending so negative get to the end. Output is not the same ask for.