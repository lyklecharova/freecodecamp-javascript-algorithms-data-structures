/*
    if statements are used to make decisions in code. 
    The keyword if tells JavaScript to execute 
    the code in the curly braces under certain conditions, 
    defined in the parentheses. These conditions are known as Boolean conditions 
    and they may only be true or false.

    When the condition evaluates to true, the program executes the statement inside the curly braces.
     When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
*/

/*
    Create an if statement inside the function to return Yes, 
    that was true if the parameter wasThatTrue is true and return No, 
    that was false otherwise.
*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
        return 'Yes, that was true';
    }
    return 'No, that was false';

    // Only change code above this line

}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));