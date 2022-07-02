function reverse(val) {
for(let i = 0; i < (val.length / 2); i++) {
    let temp = val[i];
    val[i] = arr[((val.length - 1) - i)];
    val[((val.length - 1) - i)] = temp;
}
}

let arr = [10, 5, 7, 8, 9];
console.log(arr);