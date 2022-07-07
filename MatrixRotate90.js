/**
 * Q - WRITE AN ALGORITHM TO ROTATE A SQUARE MATRIX IN 90 DEGREE
 * Ans - Steps have to follow :--
 *      STEP 1 - Declare a Square Matrix
 *      STEP 2 - Observe what happen when we rotate it to 90 degree clockwise
 *      STEP 3 - We observed if we rotate a square matrix into 90 degree clockwise, then it's first row 
 * interchange the last column, then second row interchange last second column
 *      STEP 4 - So we have to use two loops to make it interchange
 *      STEP 5 - One loop starts first row and second loop starts with last column to interchange.
 */

function rotate90CW(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let newArr = [];
        for(let j = arr.length - 1; j >= 0; j--) {
            newArr.push(arr[j][i])
        }
        result.push(newArr)
    }
    return result;
}

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(rotate90CW(arr));

/**
 * OUTPUT ::
 *      [
            [ 13, 9, 5, 1 ], 
            [ 14, 10, 6, 2 ],
            [ 15, 11, 7, 3 ],
            [ 16, 12, 8, 4 ] 
        ]
 */