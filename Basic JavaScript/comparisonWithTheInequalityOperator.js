/*
    The inequality operator (!=) is the opposite of the equality operator. 
    Inequality means not equal. The inequality operator returns false 
    when the equality operator would return true and vice versa. 
    Like the equality operator, the inequality operator 
    will convert data types of values while comparing.
*/

/*
    Add the inequality operator != in the if statement so that 
    the function will return the string 
    Not Equal when val is not equivalent to 99.
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(99));
console.log(testNotEqual(12));