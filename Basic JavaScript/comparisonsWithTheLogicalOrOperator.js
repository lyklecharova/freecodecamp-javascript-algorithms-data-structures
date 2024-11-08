/*
    The logical or operator (||) returns true if either 
    of the operands is true. Otherwise, it returns false.
*/

/*
    return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.
*/

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));