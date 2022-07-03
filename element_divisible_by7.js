/**
 * Q - 2 write a function to
 * return all the values in array which is divisible by 7
 * eg - [32,34,56,21,49,11,34]
 * Ans = - [21,49,56]
 */

/**
 * We first defined array.
 * Then we use filter function to select element divisible by 7
 * Then we give the output.
 */

arr = [32,34,56,21,49,11,34];
const result = arr.filter((element) => {
    return (element % 7 == 0);
})

console.log(result);