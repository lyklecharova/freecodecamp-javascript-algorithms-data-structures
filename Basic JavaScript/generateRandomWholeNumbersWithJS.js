function randomWholeNum() {
    // Math.random() to generate a random decimal number.
    //Math.floor() to round this number down to its nearest whole number.
    return Math.floor(Math.random() * 10);

}
console.log(randomWholeNum());