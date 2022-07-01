//sum of the digits of n until the result becomes single digit.

function digiSum(n) {
    if(n > 9) {
        let sum = 0;
        while(n > 0) {
        let a = n % 10;
        n = Math.floor(n/10);
        sum = sum + a;
        }
        return digiSum(sum);
    }
    return n;
}

console.log(digiSum(12345)); // (1 + 2 + 3 + 4 + 5) = 15 --> (1 + 5) = 6.