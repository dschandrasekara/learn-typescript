/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Arrays folder
3) In command prompt run `tsc arrayOperations.ts`
4) Run the command `node arrayOperations.js`*/

// Common operations

// declare array
const arrayNew: Array<number> = [1, 2, 3];

console.log(arrayNew); // [1,2,3]

// find length
const listLength = arrayNew.length;
console.log(listLength) // 3

// push elements in array (add element in end)
arrayNew.push(0);
console.log(arrayNew) // [1,2,3,0]

// looping in array
arrayNew.forEach(function(item, index, array) {
    console.log(item, index)
  })
// 1,0 2,1 3,2 0,3

// pop element in array (remove element in end)
arrayNew.pop()
console.log(arrayNew) // [1,2,3]

// remove element in beginning
arrayNew.shift()
console.log(arrayNew) // [2,3]

// add in beginning
arrayNew.unshift(1);
console.log(arrayNew) // [1,2,3]
 
// shallow copy
let arrayCopyNew = arrayNew.slice() // this is how to make a copy
// [1,2,3]


