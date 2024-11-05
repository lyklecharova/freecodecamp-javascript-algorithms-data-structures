/*
    pop() always removes the last element of an array. 
*/

/*

    Use the .shift() function to remove the first item 
    from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/


// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray  = myArray.shift(["dog", 3]);
console.log(removedFromMyArray);