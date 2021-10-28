/** Steps to run the file
1) First install Typescript: `npm install -g typescript`
2) Move to Set folder
3) In command prompt run `tsc set.ts`
4) Run the command `node set.js`*/

// the set object will allow us to quickly discard duplicated elements on an array, either primitive values
// or object references. comes in handy when we want to make sure a value is not repeated or to store unique
// values, depends on your perspective in its use, we can either declare the Set object before while adding
// individual values separately, or we can use an existing array and declare a Set object with it, which will
// discard all the duplicated elements on it.

const setDemo = new Set();

setDemo.add(2); // Set [ 2 ]
setDemo.add(3); // Set [ 2, 3 ]
setDemo.add(4); // Set [ 2, 3, 4 ]
setDemo.add(4); // Set [ 2, 3, 4 ] *does not repeat the value*
setDemo.add("additional text"); // Set [ 2, 3, 4, 'additional text']
const obj = { elemOne: 5, elemTwo: "extra text" };
setDemo.add(obj); // Set [ 2, 3, 4, 'additional text', {...}]
console.log([setDemo]); // Set(5) [ 2, 3, 4, 'additional text', {...}]

// Set has some handy methods for us to confirm if the container has an specific value, for it we use the has()
// method which will return either true or false. we can also check its size with a normal size method. We can
// delete specific elements on it by using the delete() method.

setDemo.has(3); // true
setDemo.has(6); // false
setDemo.size; // 5
setDemo.delete("additional text"); // [ 2, 3, 4, {...}]

// brief example of how we can use Set to guarantee uniqueness in the elements of an array

const arr = [5, 24, 45, 27, 5, 4, 6, 5, 456, 43, 22, 4, 4, 6, 7];
const setDemo2 = new Set(arr);

console.log([setDemo2]); // [2, 3, 4, 5, 6, 7, 32]
