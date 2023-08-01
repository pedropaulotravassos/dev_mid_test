function checkIfIsPrimeNumber(num) {
    if (!(num % 2) && num != 2) return false
    else if (!(num % 3) && num != 3) return false
    else if (!(num % 5) && num != 5) return false
    else if (!(num % 7) && num != 7) return false
    else return true;
}

function printNextTenPrimeNumbers(startNum = 1) {
    const result = []
    let index = startNum
    while (result.length < 10) {
        const isPrime = checkIfIsPrimeNumber(index)
        if (isPrime) result.push(index)
        index++;
    }
    return result
}

module.exports = {
    checkIfIsPrimeNumber,
    printNextTenPrimeNumbers
}