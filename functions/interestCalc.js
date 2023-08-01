function simpleInterest(capital, rate, time) {
  return capital + capital * (rate / 100) * time;
}

function compoundInterest(capital, rate, time) {
  return capital * Math.pow((1 + (rate / 100)), time);
}

module.exports = {
  simpleInterest,
  compoundInterest,
};
