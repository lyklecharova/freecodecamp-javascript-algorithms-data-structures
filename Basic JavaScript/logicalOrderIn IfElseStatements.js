function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}


console.log(orderMyLogic(7));
console.log(orderMyLogic(4));
console.log(orderMyLogic(10));
console.log(orderMyLogic(11));