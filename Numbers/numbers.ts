var month = 0
if( month<=0 || month >12) {
    month = Number.NaN
    console.log("Month is "+ month)
} else {
    console.log("Value Accepted..")
}
/*TypeScript like JavaScript supports numeric values as Number objects.
A number object converts numeric literal to an instance of the number class.
The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.
compile command  FILENAME=Numbers  FOLDER=numbers npm run compile
run command      FILENAME=Numbers  FOLDER=numbers npm run output
 */