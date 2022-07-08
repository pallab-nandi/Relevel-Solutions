/**
 * input - [
 *              [1, 2, 3, 4],
 *              [5, 6, 7, 8],
 *              [9, 10, 11, 12],
 *              [13, 14, 15, 16]
 *         ]
 * 
 * Output - to be output in spiral form -
 *                          1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
 */

function spiral(arr) {
    let arr1 = [];
    while(arr.length > 0) {
    arr1.push(...arr.shift());
    arr1.push(
        ...arr.map(
            (e) => {
                return e.pop();
            }
        )
    );
    arr1.push(...arr.pop().reverse());
    arr1.push(...arr.map(
        (e) => {
            return e.shift();
        }
    ).reverse());
    }
    return arr1;
}

let a = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
]

console.log(spiral(a)); // giving correct output

let b = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]

console.log(spiral(b)); // having error in output