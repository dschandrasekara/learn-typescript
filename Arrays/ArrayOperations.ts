
export {}
// Array  Creation
let  arr: String[]=["Hello World ","HactoberFest"]

console.log(arr)
console.log("...................................");

//Adding Elements To array
arr.push("How Are You");
console.log(arr)
console.log("...................................");

//Accessing The Elements
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log("...................................");

//To Find Length Of The Array
console.log(arr.length)
console.log("...................................");

//To Pop Out An Element
console.log(arr.pop());
console.log("...................................");

//To Sort An Array
console.log(arr.sort());
console.log("...................................");4

//To Reverse
console.log(arr.reverse());
console.log("...................................");

//Access Array Elements Using Loop
for (let index of arr) {
  console.log(index);
  
}
console.log("...................................");

//To Find Index Of a Specific Element In The Array
console.log(arr.indexOf("HactoberFest"));
console.log("...................................");

//To Slice a Given Array
console.log(arr.slice(1));//we can pass starting and ending vertex as parameter

//Filter elements from array
const newFilteredArray = arr.filter(f => f !== "HactoberFest");
console.log(newFilteredArray)
console.log("...................................");

//Find elements from array
const newFoundArray = arr.find(f => f === "HactoberFest");
console.log(newFoundArray)
console.log("...................................");

