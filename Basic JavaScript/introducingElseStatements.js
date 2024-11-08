/*
    When a condition for an if statement is true, the block of code following it is executed. 
    What about when that condition is false? 
    Normally nothing would happen. With an else statement, an alternate block of code can be executed.
*/

// Combine the if statements into a single if/else statement.

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val <= 5) {
        result = "5 or Smaller";
    } else {
        result = "Bigger than 5";
    }

    // Only change code above this line
    return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));