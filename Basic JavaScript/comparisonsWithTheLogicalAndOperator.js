/*
    Sometimes you will need to test more than one thing at a time. 
    The logical and operator (&&) returns true 
    if and only if the operands to the left and right of it are true.
*/

/*
    Replace the two if statements with one statement, using the && operator, 
    which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. 
    Otherwise, will return the string No.
*/

function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));