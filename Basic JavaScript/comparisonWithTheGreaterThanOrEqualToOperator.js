/*
    The greater than or equal to operator (>=) compares the values of two numbers. 
    If the number to the left is greater than or equal to the number to the right, 
    it returns true. Otherwise, it returns false.
*/

/*
    Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

*/

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(0))
console.log(testGreaterOrEqual(9))
console.log(testGreaterOrEqual(10))
console.log(testGreaterOrEqual(11))
console.log(testGreaterOrEqual(19))
console.log(testGreaterOrEqual(100))
console.log(testGreaterOrEqual(21))