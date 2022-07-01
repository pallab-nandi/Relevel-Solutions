for(let i = 5; i >= 1; i--) { //This loop is for printing the rows
    //ith row ---> i stars.

    let str = '';
    for(let j = 1; j <= i; j++) {
        str = str + '*'
    }

    console.log(str);
}
