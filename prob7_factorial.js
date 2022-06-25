//To find the value of a factorial of a number N

function fact(a) {
    let ans = 1;
    for(let i = a; i >= 1; i--) {
        ans = ans * i;
    }
    console.log(ans);
}

fact(3);
fact(5);