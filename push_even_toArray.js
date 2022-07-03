/**
 * Push Even numbers to array
 * 
 * 1. we difine array.
 * 2. we define another empty array to push in it.
 * 3. we use for loop to check the element if even or not.
 * 4. we push the result to empty array.
 * 5. At last we return the value.
 */

let arr = [32,34,56,21,49,11,34,30];
let emptyArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) emptyArr.push(arr[i]);
}
console.log(emptyArr);