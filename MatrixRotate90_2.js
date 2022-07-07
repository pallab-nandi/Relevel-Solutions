/**
 * Write a program to rotate a Matrix in 90 deg clock-wise
 * Alternate Method - 
 *      STEP 1 - First transpose the Matrix
 *      STEP 2 - Then reverse each nested array of the transposed Matrix
 */

function transpose(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr[i].length; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    return arr;
}

function reverse(arr) {
    let n = arr.length - 1
    for(let i = 0; i <= n/2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i];
        arr[n - i] = temp;
    }
    return arr;
}

function rotate90deg(arr) {
    arr = transpose(arr);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = reverse(arr[i]);
    }
    return arr;
}

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(rotate90deg(arr));

/**
 * OUTPUT ::
 *      [
            [ 13, 9, 5, 1 ],
            [ 14, 10, 6, 2 ],
            [ 15, 11, 7, 3 ],
            [ 16, 12, 8, 4 ]
        ]
 */