//prime upto N using loop.

function isPrime(a) {
    if(a <= 1) return 0;
    else {
        for(let i = 2; i < Math.sqrt(a); i++) {
            if(a % i == 0) return false;
        }
        return true;
    }
}

function prime(N) {
    for(let i = 2; i <= N; i++) {
        if(isPrime(i)) console.log(i);
    }
}

prime(7);