//To check whether is it possible to create a triangle or not

function chk(a, b, c) {
    if(a + b > c && b + c > a && c + a > b) {
        console.log("triangle");
    } else {
        console.log("not triangle");
    }
}

chk(7, 10, 5);
chk(3, 4, 8);