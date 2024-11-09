/*
    spread operator allows us to expand arrays and other expressions 
    in places where multiple parameters or elements are expected.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);