const express = require('express')
const app = express()
// add functions
const primeNumbers = require('./functions/primeNumbers')

app.get('/prime-numbers', function (req, res) {
    res.send(`Os dez próximos números primos são: ${primeNumbers.printNextTenPrimeNumbers(req.query.startNum)}`)
})
app.get('/is-prime-number', function (req, res) {
    res.send(`${req.query.number} ${primeNumbers.checkIfIsPrimeNumber(req.query.number) ? 'é primo' : 'não é primo'}`)
})

app.listen(3000, () => console.log('started api!'))