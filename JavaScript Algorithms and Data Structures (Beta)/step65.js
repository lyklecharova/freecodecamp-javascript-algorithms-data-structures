const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber); 
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count)); 
}

let result = "";

for (const row of rows) {
    result += row + "\n"; 
}

console.log(result);
