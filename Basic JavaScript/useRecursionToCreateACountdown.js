// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    }else{
        return [n, ...countdown(n - 1)];
    }

}
// Only change code above this line
console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));