function arrayPop(arr) {
    arr.length = arr.length - 1;
    return arr;

}

let temp1 = [2, 3, 4, 5, 8];
console.log(arrayPop(temp1)); //[2, 3, 4, 5]