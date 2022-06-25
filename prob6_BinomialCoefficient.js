//To find the Binomial Coefficient of given parameter m and n

function fact(a) {
    let ans = 1;
    for(let i = a; i >= 1; i--) {
        ans = ans * i;
    }
    return ans;
}

function binom(m, n) {
    let ans = (fact(m))/(fact(n) * fact(m - n));
    console.log(ans);
}

binom(6, 3);