function arrayJoin(arr, val) {
    let ind = arr.length;
    arr[ind] = val;
    return arr;
}

let temp1 = [4, 7, 2];
console.log(arrayJoin(temp1, "Hello")); //[4, 7, 2, "Hello"]