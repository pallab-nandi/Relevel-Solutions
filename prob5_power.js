//To find the value of a number X to the power Y

function pwr(x, y) {
    let ans = 1;
    for(let i = 1; i <= y; i++) {
        ans = ans * x;
    }
    console.log(ans);
}

pwr(2, 3);
pwr(6, 5);