/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Functions folder
3) In command prompt run `tsc rest-params.ts`
4) Run the command `node rest-params.js`*/

// When the number of parameters that a function will receive is not known or can vary, 
// we can use rest parameters.
// In JavaScript, this is achieved with the "arguments" variable.
// However, with TypeScript, we can use the rest parameter denoted by ellipsis ...

// We can pass zero or more arguments to the rest parameter.
// The compiler will create an array of arguments with the rest parameter name provided by us.

// Example 1
function Greet(greeting: string, ...names) {
    // Here names is an array.
    return greeting + " " + names.join(", ") + "!";
}

const value = Greet("Hello", "Steve", "Bill");

console.log(value);


// Example 2
// Type annotations for a rest parameter are identical to type annotations for arrays.

// Example 1
function TypedGreet(greeting: string, ...names: string[]) {
    // Here names is an array. Typesafed for string values.
    return greeting + " " + names.join(", ") + "!";
}
// Calling TypedGreet("Hello", 1 , 2) will throw error as 1, 2 are not string type.

console.log(TypedGreet("Hello", "Steve", "Bill"));

