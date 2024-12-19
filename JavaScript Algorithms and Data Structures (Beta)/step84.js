const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Declare the continueLoop and done variables
let continueLoop = false;
let done = 0;

// Use a while loop instead of the for loop
let i = 1;
while (i <= count) {
    rows.push(padRow(i, count));
    i += 1;  // Increment i
}

let result = "";

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);
