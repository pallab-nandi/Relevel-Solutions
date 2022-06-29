// let numArray = [12, 234, 34, 1, 2, 6, 0, -1];
let numArray = [2, 3, 15, 6];

// let minValue = numArray[0], maxValue = numArray[0];
// for(let i = 0; i <= numArray.length - 1; i++) {
//     if(numArray[i] < minValue) {
//         minValue = numArray[i];
//     }
// }
// for(let i = 0; i <= numArray.length - 1; i++) {
//     if(numArray[i] > maxValue) {
//         maxValue = numArray[i];
//     }
// }

// console.log(minValue);
// console.log(maxValue);

function MinMax(arr) {
        let minValue = arr[0], maxValue = arr[0];
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    console.log("Minimum value :", minValue);
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    console.log("Maximum value :", maxValue);
}

MinMax(numArray);