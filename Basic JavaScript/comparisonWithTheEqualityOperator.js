/*
    The most basic operator is the equality operator ==.
    The equality operator compares two values and returns true if they're equivalent or false if they are not. 
    Note that equality is different from assignment (=), which assigns the value on 
    the right of the operator to a variable on the left.
*/

/*
    Add the equality operator to the indicated line so that the function will return the string Equal 
    when val is equivalent to 12.
*/

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual('12'));