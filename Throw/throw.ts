// The throw statement throws a user-defined exception.
// Execution of the current function will stop (the statements after throw won't be executed),
// Control will be passed to the first catch block in the call stack.
// If no catch block exists among caller functions, the program will terminate.

// Syntax: throw expression; 

// Example 1

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw 'Parameter is not a number!';
    }
}

try {
    getRectArea(3, 'A');
} catch (e) {
    console.log('Caught in catch block.');
    console.error(e);
    // expected output: "Parameter is not a number!"
}

/**
 * Each of the following throws an exception:
 * throw 'Error2'; // generates an exception with a string value
 * throw 42;       // generates an exception with the value 42
 * throw true;     // generates an exception with the value true
 * throw new Error('Required');  // generates an error object with the message of Required`
 * */

// Example 2
try {
    throw new Error('Something bad happened');
}
catch (e) {
    console.log('Caught in catch block.')
    console.log(e);
}