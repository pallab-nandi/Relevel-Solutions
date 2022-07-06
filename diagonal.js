function check(arr) {
    let flag = true;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(i != j) {
                if(arr[i][j] != 0) flag = false;
            }
        }
    }
    return flag;
}

let arr = [
    [2, 0, 0],
    [0, 5, 0],
    [0, 0, 0]
]

console.log(check(arr));