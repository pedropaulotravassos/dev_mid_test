const express = require("express");
const app = express();
app.use(express.json());
// add functions
const primeNumbers = require("./functions/primeNumbers");
const { simpleCalculator } = require("./functions/simpleCalculator");
const { calculateFactorial } = require("./functions/factorial");
const { checkPalindrome } = require("./functions/palindrome");
const { getNumberTable } = require("./functions/table");
const { vowelCounter } = require("./functions/vowelCounter");
const { gradesAvg } = require("./functions/gradesAvg");
const { simpleInterest, compoundInterest } = require("./functions/interestCalc");

// Exercise 1: Simple Calculator
app.post("/simple-calculator", function (req, res) {
  res.send(`${simpleCalculator(req.body.numbers, req.body.operator)}`);
});
// Exercise 2: Prime Numbers
app.get("/prime-numbers", function (req, res) {
  res.send(
    `Os dez próximos números primos são: ${primeNumbers.printNextTenPrimeNumbers(
      req.query.startNum
    )}`
  );
});
app.get("/is-prime-number", function (req, res) {
  res.send(
    `${req.query.number} ${
      primeNumbers.checkIfIsPrimeNumber(req.query.number)
        ? "é primo"
        : "não é primo"
    }`
  );
});
// Exercise 3: Factorial
app.get("/factorial", function (req, res) {
  res.send(
    `O fatorial de ${req.query.number} é ${calculateFactorial(
      parseInt(req.query.number)
    )}`
  );
});
// Exercise 4: Palindrome
app.get("/palindrome", function (req, res) {
  res.send(
    `${req.query.word} ${
      checkPalindrome(req.query.word)
        ? "é um palíndromo"
        : "não é um palíndromo"
    }`
  );
});
// Exercise 5: Table
app.get("/table", function (req, res) {
  res.send(getNumberTable(parseInt(req.query.number)));
});
// Exercise 6: Vowel Counter
app.get("/vowel-counter", function (req, res) {
  res.send(vowelCounter(req.query.word));
});
// Exercise 7: Grade Average
app.post("/grade-avg", function (req, res) {
  res.send(`A média das notas é: ${gradesAvg(req.body.grades)}`);
});

// Exercise 8: Interest Calculation
app.post("/interest-calc/simple", function (req, res) {
  res.send(`Ao investir em juros simples, um capital de R$${
    req.body.capital
  } numa taxa de ${req.body.rate}% num período de ${req.body.time} meses. 
    O seu Montante será de: ${simpleInterest(
      req.body.capital,
      req.body.rate,
      req.body.time
    )}`);
});
app.post("/interest-calc/compound", function (req, res) {
  res.send(`Ao investir em juros compostos, um capital de R$${
    req.body.capital
  } numa taxa de ${req.body.rate}% num período de ${req.body.time} meses. 
    O seu Montante será de: ${compoundInterest(
      req.body.capital,
      req.body.rate,
      req.body.time
    )}`);
});

app.listen(3000, () => console.log("started api!"));
