function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal';
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));
console.log(checkEqual(1, -1));