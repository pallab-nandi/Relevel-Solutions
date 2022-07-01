//Sorting an array in ascending order

function sortAsc(arr) {
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] > arr[i + 1]) return sortAsc(arr);
    }
    return arr;
}

//Sorting an array in descending order

function sortDesc(arr) {
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for(let i = 0; i < (arr.length - 1); i++) {
        if(arr[i] < arr[i + 1]) return sortDesc(arr);
    }
    return arr;
}

let numArray = [12, 234, 34, 1, 2, 6, 0, -1];
console.log("Array in ascending order : \n", sortAsc(numArray)); //  [-1, 0, 1, 2, 6, 12, 34, 234]
console.log("Array in descending order : \n", sortDesc(numArray)); //  [234, 34, 12, 6, 2, 1, 0, -1]