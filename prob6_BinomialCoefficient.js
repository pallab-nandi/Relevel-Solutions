<<<<<<< HEAD
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

=======
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

>>>>>>> 2a74451 (by Pallab Nandi)
binom(6, 3);