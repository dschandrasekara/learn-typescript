export {}
// Array  parameters
function firstElement(arr: any[]) {
    return arr[0];
}
let  arr: number[]=[4,5,6]
console.log(arr)
console.log("Least element in the array is : "+ firstElement(arr));
console.log("----------------------------------");
//Specifying Type parameter
function append<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
console.log(append<string | number>([1, 2, 3], ["hello"]));
console.log("----------------------------------");
// optional  parameters
function add(num1: number,num2?: number):number//making the second parameter optional
{
    if (num2)
        return num1+num2;
    else
        return num1;
}
console.log(add(3,4));
console.log(add(5));
console.log("----------------------------------");


//default Parameter
function diff(num1: number,num2: number= 10):number{
    if (num2)
        return num1-num2;
    else
        return num1;
}
console.log(diff(7,4));
console.log(diff(5)); //if a parameter is not there a default value is there
console.log("----------------------------------");


// Parameter either string or number
type SorN = string | number;
function sum(a:SorN,b:SorN):SorN{
    if(typeof a=='number' && typeof b=='number'){
        return a+b;
    }
    return a.toString() + b.toString(); //tostring() will return string
    //here we returning a concatinated string
}
console.log(sum(2,3));
console.log(sum("HACKTOBER","FEST"));
console.log("----------------------------------");
