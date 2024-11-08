/*
    The less than operator (<) compares the values of two numbers. 
    If the number to the left is less than the number to the right, 
    it returns true. Otherwise, it returns false. Like the equality operator, 
    the less than operator converts data types while comparing.
*/

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}
console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));