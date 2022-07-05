/**
 * Write a program to print all the elements of the array, and multiply each element from 5
 */

let arr = [
    [2, 3, 5],
    [5, 2, 1],
    [3, 6, 1]
]

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        arr[i][j] = arr[i][j] * 5;
    }
}

console.log(arr);