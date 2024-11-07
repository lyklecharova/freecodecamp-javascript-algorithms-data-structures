/*
    Parameters are variables that act as placeholders for the values 
    that are to be input to a function when it is called. 
    When a function is defined, it is typically defined along with one or more parameters. 
    The actual values that are input (or "passed") into a function when it is 
    called are known as arguments.
*/

/*
    Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
    Call the function with two numbers as arguments.
*/

function functionWithArgs(args1, args2) {
    const result = args1 + args2;
    console.log(result);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);