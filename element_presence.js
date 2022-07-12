/**
 * Given a 2D array where the value of any row element is greater than the previous row. Our task is to find if element x is present in
the array.
 */

const isPresent = (mat, x) => {
    flag = false;
    mat.map(
        (arr) => {
            // console.log(arr);
            arr.map(
                (e) => {
                    // console.log(e);
                    if(e == x) flag = true;
                }
            )
        }
    )
    return flag;
}

let mat = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [10, 26, 27, 28]
]

console.log(isPresent(mat, 21));