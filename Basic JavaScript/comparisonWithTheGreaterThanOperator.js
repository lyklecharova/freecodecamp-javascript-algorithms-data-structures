/*
    The greater than operator (>) compares the values of two numbers. 
    If the number to the left is greater than the number to the right, it returns true.
     Otherwise, it returns false.
*/

/*
    Add the greater than operator to the indicated lines so that the return statements make sense.

*/

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));