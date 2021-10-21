/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Functions folder
3) In command prompt run `tsc functions.ts`
4) Run the command `node functions.js`*/

// TypeScript functions can be created both as a named function or as an anonymous function

function sum(a: number, b: number): number {
    return a + b;
}

let mySum = function (a: number, b: number): number {
    return a + b;
};

// Function expression
let greet2 = function (name: string) {
    return 'hello ' + name
}
// optional and default parameters
function messageLog(message: string, userId?: string) {
    let time = "11:00AM";
    console.log(time, message, userId || 'Not signed in')
}
messageLog('Loaded') // logs "11:00AM Loaded Not signed in"
messageLog('Loaded', 'user123')  // logs "11:00AM Loaded user123"