/**
 * Q - 3 write a function to
 * return all the values in array which is divisible by n
 * eg - [32,34,56,21,49,11,34,30] 6
 * Ans = - [30]
 *
 * eg -2 -  [23,34,56,43,16,24,81,18] n = 9
 * o/p [81,18]
 */

/**
 * We create a function with filter function on it
 */

function divisible(arr, n) {
    let result = arr.filter((element) => {
        return (element % n == 0);
    })
    console.log(result);
}

let arr1 = [32,34,56,21,49,11,34,30];
divisible(arr1, 6);

let arr2 = [23,34,56,43,16,24,81,18];
divisible(arr2, 9);
