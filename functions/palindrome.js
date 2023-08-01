exports.checkPalindrome = (word = '') => {
    const baseWord = word
    const stringArray = word.split("")
    const reversedString = stringArray.reverse().join("")
    return reversedString === baseWord ? true : false
}