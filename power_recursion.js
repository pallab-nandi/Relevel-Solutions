//Program to find x raised to the power n

function myPow(x, n) {
    if(n == 0) return 1;
    let result = x * myPow(x, (Math.abs(n) - 1));
    if(n > 0) return result;
    else return 1/result;
}

console.log(myPow(4, 0)); // 1
console.log(myPow(2, 5)); // 32
console.log(myPow(2, -3)); // 0.125
console.log(myPow(5, -2)); // 0.04