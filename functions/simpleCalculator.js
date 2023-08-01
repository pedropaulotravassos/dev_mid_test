exports.simpleCalculator = (numbers = [], operator = "") => {
    if (numbers.length !== 2 || !operator) return 0
    let result = 0
    switch (operator) {
        case '+':
            result = numbers[0] + numbers[1]
            break;
        case '-':
            result = numbers[0] - numbers[1]
            break;
        case '/':
            result = numbers[0] / numbers[1]
            break;
        case '*':
            result = numbers[0] * numbers[1]
            break;
    }
    return result
}