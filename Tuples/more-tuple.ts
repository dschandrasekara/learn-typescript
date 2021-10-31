/*
Sometimes need to store a set of values of different types.
Arrays will not support this, therefore TypeScript gives us a data type called tuple that helps to achieve such a purpose.
 */

// define a tuple with different type of values
console.log("** Simple tuple usage")
let tupleSample1 = [1000, "Hello", true, ["test1", "test2"]]
tupleSample1.forEach(function (val) {
    console.log(val)
});
console.log("")

// define empty tuple and assign values
console.log("** Define empty tuple and assign values")
let tupleSample2 = []
tupleSample2[0] = 1000
tupleSample2[1] = true
tupleSample2[2] = "assigned"
tupleSample2[3] = [99, 88]
tupleSample2.forEach(function (val) {
    console.log(val)
});
console.log("")

// destructuring a Tuple sample
console.log("** Destructuring a Tuple sample")
tupleSample1 = [10, "Hello", true, ["test1", "test2"]]
let [num, bool, str, arr] = tupleSample1
console.log(num)
console.log(bool)
console.log(str)
console.log(arr)
