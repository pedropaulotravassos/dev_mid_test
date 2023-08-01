const express = require('express')
const app = express()
app.use(express.json())
// add functions
const primeNumbers = require('./functions/primeNumbers')
const { simpleCalculator } = require('./functions/simpleCalculator')

// Exercise 1: Simple Calculator
app.post('/simple-calculator', function (req, res) {
    res.send(`${simpleCalculator(req.body.numbers, req.body.operator)}`)
})
// Exercise 2: Prime Numbers
app.get('/prime-numbers', function (req, res) {
    res.send(`Os dez próximos números primos são: ${primeNumbers.printNextTenPrimeNumbers(req.query.startNum)}`)
})
app.get('/is-prime-number', function (req, res) {
    res.send(`${req.query.number} ${primeNumbers.checkIfIsPrimeNumber(req.query.number) ? 'é primo' : 'não é primo'}`)
})

app.listen(3000, () => console.log('started api!'))