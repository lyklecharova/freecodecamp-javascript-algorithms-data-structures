/*
    Modify the function so that it returns the string Equal only when the values are strictly equal.
*/

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));