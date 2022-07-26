function maxRowUniqueElements(matrix) {

    return matrix.map(function(inisde) {
        let uniqueElements = Object.entries(inisde.reduce((accumlator, element) => {
            if(accumlator[element]) {
                accumlator[element] = accumlator[element] + 1;
            } else {
                accumlator[element] = 1;
            }
            return accumlator;
        }, {})).reduce((accumlator, pair) => {
            if(pair[1] === 1) {
                return accumlator + 1;
            }
        }, 0);
        return uniqueElements;
    }).reduce((accumlator, element) => Math.max(accumlator, element), 0);
}