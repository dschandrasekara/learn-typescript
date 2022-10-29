/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Type-Casting folder
3) In command prompt run `tsc typeCasting.ts`
4) Run the command `node date.js`*/

/*Type Casting can be done using-
1) using 'as' keyword
2) using '<>' operator
3) using force typecasting*/

let text : unknown = "Typescript";
let value = (text as string).length;
console.log(value);

/*Here earlier if we assign value the text it would surely gonna throw an error, which is an Object 'unknown'. To solve this problem the type casting is used for which we used as keyword. Thus first we cast the variable to a string so that the string function lenght could tell us the length of string text(earlier was of unknown data type)*/

let input = document.querySelector('input') as HTMLInputElement;
let inputValue = input.value;

/*this helps in TypeScript as this throws an error, since Object is possibly 'null'.. TypeScript has a number of predefined types for query selector outputs, but we can't write let input:HTMLInputElement = ... either, since the input is possibly null. As such, we have to cast the input to HTMLInputElement to get the value:*/

let para: unknown = "Typescript";
console.log((<string>para).length);

/*the same can also be done using <> operator the reasons are same as above NOTE:This type of casting does not work with TSX files*/

/*Next way is to force cast the variable into unknown and then to other desired type this is done to avoid type errors as in this example-*/
let quote = 499;
console.log(((quote as unknown) as string).length);



