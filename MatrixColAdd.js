/**
 * GETTING THE SUM OF THE ELEMENTS FROM MATRIX COLUMN-WISE
 */

function colSum(arr) {
    let result = [];
    for(let i = 0; i < arr[i].length; i++) {
        let sum = 0;
        for(let j = 0; j < arr.length; j++) {
            sum += arr[j][i];
        }
        result.push(sum);
    }    
    return result;
}

let arr = [
    [3, 4, 5],
    [3, 4, 2],
    [2, 3, 4],
    [4, 4, 4]
]

console.log(colSum(arr));