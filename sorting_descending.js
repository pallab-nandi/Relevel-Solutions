//Sorting an array in descending order

function sort(arr) {
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) return sort(arr);
    }
    return arr;
}

let numArray = [12, 234, 34, 1, 2, 6, 0, -1];
console.log(sort(numArray)); // [234, 34, 12, 6, 2, 1, 0, -1]