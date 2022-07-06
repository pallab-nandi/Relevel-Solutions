// Bomb Explotion Actual Problem

function bombMatrix(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == -1) {
                if((i - 1) >= 0 && arr[i-1][j] != -1) arr[i-1][j]++;
                if((i + 1) <= (arr.length - 1) && arr[i+1][j] != -1) arr[i + 1][j]++;
                if((j - 1) >= 0 && arr[i][j-1] != -1) arr[i][j-1]++;
                if((j + 1) <= (arr[i].length - 1) && arr[i][j+1] != -1) arr[i][j+1]++;
            }
        }
    }
    return arr;
}

arr = [
    [2, -1, -1],
    [-1, 4, 6],
    [5, 6, -1]
]

console.log(bombMatrix(arr));