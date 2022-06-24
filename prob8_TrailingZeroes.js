//To find the total number of trailing zeroes on a factorial of given number N

function factzero(a) {
    let ans = 1;
    for(let i = a; i >= 1; i--) {
        ans = ans * i;
    }
    
    let count = 0;
    while(ans === Math.floor(ans)){
        ans = ans / 10;
        if(ans === Math.floor(ans)) {
            count ++;
        }
    }

    console.log(count);
}

factzero(20);