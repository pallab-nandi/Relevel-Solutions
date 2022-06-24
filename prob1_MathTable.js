//To show the output of Mathematic Table from 0 to N.

function table(m, n) {
    for(let i = 0; i <= n; i++) {
        console.log(m, "*", i, "=", m*i);
    }
}

table(5,6);
table(8, 14);