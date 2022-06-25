function arrayAdd(arr, val) {
    arr = arr.concat(val); 
    return arr;
}

let array1 = [2, 4, 5];
console.log(arrayAdd(array1, "hello"));