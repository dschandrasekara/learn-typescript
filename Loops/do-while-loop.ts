//compile command -  FILENAME=do-while-loop FOLDER=Loops npm run compile
//output command -  FILENAME=do-while-loop FOLDER=Loops npm run output

let cycle:number = 6
//it is similar to the while loop except that the
// do...while loop does not evaluate the condition for the first time the loop executes.
do {
    console.log("executed cycle num: " + cycle)
    cycle--
}
while(cycle >= 5)
