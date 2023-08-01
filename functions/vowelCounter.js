exports.vowelCounter = (word = "") => {
  const wordArray = word.split("");
  const vowels = wordArray.filter(
    (x) =>
      x.toLowerCase() == "a" ||
      x.toLowerCase() == "e" ||
      x.toLowerCase() == "i" ||
      x.toLowerCase() == "o" ||
      x.toLowerCase() == "u"
  );
  return `a palavra ${word} tem ${vowels.length} vogais que são as seguintes: ${vowels}`
};
