/**
 * Transpose of a square matrix.
 */

function transpose(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let temp = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = temp;
        }
    }
    return arr;
}

let arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

console.log(transpose(arr));

/**
 * OUTPUT ::
    [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]
 */