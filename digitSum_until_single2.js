function digiSum(n) {
    if(n > 10){
        let a = n % 10;
        n = Math.floor(n/10);
        return digiSum(a + digiSum(n));
    }
    return n;
}

console.log(digiSum(12345));