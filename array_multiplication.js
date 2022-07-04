/**
 * ASSIGNMENT : Updates every element of array with multiplication of previous and next elements.
 
    NOTE :  First element is replaced by multiplication of first and second.
            Last element is replaced by multiplication of last and second last.
 */

function change(val) {
    n = val.length;
    if(n <= 1) return val;
    else if(n == 2) {
        let temp = val[0];
        val[0] = val[0] * val[1];
        val[1] = temp * val[1];
    } else {
    val = val.map((e, i, val) => {
        if(i == 0) return val[i] * val[i+1];
        if(i == (n - 1)) return val[n - 1] * val[n - 2];
        if(i != 0 && i != (n - 1)) {
            return val[i - 1] * val[i + 1];
        }
    })
    }
    return val;
}

let arr = [2, 3, 4, 5, 6];
console.log(change(arr));

/**
 * OUTPUT ::
    [ 6, 8, 15, 24, 30 ]
 */