exports.calculateFactorial = (num) => {
    let factorial = 1
    let nextNumber = 1
    if (num) {
        for (let index = 1; index <= num; index++) {
            nextNumber++
            if (nextNumber <= num) {
                factorial =  factorial * nextNumber
            }
        }
    }
    return factorial
}