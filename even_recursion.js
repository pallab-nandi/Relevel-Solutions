function even(i, n) {
    if(i <= n) {
        console.log(i);
        even(i + 2, n);
    }
}

even(2, 50);