/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Create file
3) In command prompt run `tsc Stringexample.ts`
4) Run the command `node Stringexample.js`*/

//String Initialization  
let str1: string = 'Hello';  
let str2: string = 'Github';  
//String Concatenation  
console.log("Combined Result: " +str1.concat(str2));  

//String charAt  
console.log("Character At 4: " +str2.charAt(4));  

//String indexOf  
console.log("Index of i: " +str2.indexOf('i'));

//String replace  
console.log("After Replacement: " +str1.replace('Hello', 'Welcome to')); 

//String uppercase  
console.log("UpperCase: " +str2.toUpperCase());  