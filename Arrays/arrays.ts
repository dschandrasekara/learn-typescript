/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Arrays folder
3) In command prompt run `tsc arrays.ts`
4) Run the command `node arrays.js`*/
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);

// ways to use a generic array type
let list: number[] = [1, 2, 3];

// another way
let listNew: Array<number> = [1, 2, 3];

// some ways of declaring boolean arrays
let arr1: boolean[] = [];
let arr2: Array<boolean> = [];
let arr3 = <boolean[]> Array();
let arr4 = new Array<boolean>();

// mixed up array
let values: (string | number)[] = ['Apple', 1, 9, 3, 4, 'Guava','Mango',2];

// accessing array elements
let numbers: number [] = [1,2,3,4,5];
console.log(numbers[0]);
/*
Features of an Array
Here is a list of the features of an array −
An array declaration allocates sequential memory blocks.
Arrays are static. This means that an array once initialized cannot be resized.
Each memory block represents an array element.
Array elements are identified by a unique integer called as the subscript / index of the element.
Like variables, arrays too, should be declared before they are used. Use the var keyword to declare an array.
Array initialization refers to populating the array elements.
Array element values can be updated or modified but cannot be deleted

compile command: FILENAME=Arrays  FOLDER=arrays npm run compile
run command: FILENAME=Arrays  FOLDER=arrays npm run output

 */