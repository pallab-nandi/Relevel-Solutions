/**
 * INPUT - [
 *              [1, 2, 3, 4],
 *              [5, 6, 7, 8],
 *              [9, 10, 11, 12],
 *              [13, 14, 15, 16]
 *          ]
 * 
 * OUTPUT - [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */

function spiral(arr) {
    let r_min = 0, r_max = (arr.length - 1), c_min = 0, c_max = (arr.length - 1);
    let result = [];

    while(r_min < arr.length && r_max >= 0) {
        for(let i = c_min; i <= c_max; i++) {
            result.push(arr[r_min][i]);
        }
        r_min++;

        for(let i = r_min; i <= r_max; i++) {
            result.push(arr[i][c_max]);
        }
        c_max--;

        for(let i = c_max; i >= c_min; i--) {
            result.push(arr[r_max][i]);
        }
        r_max--;

        for(let i = r_max; i >= r_min; i--) {
            result.push(arr[i][c_min]);
        }
        c_min++;
    }
    return result;
}

let arr1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(spiral(arr1)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

let arr2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

console.log(spiral(arr2)); /* [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 
                                6, 7, 8, 9, 14, 19, 18, 17, 12, 13] */