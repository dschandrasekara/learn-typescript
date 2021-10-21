//compile command -  FILENAME=typeGuards FOLDER=TypeGuards npm run compile
//output command -  FILENAME=typeGuards FOLDER=TypeGuards npm run output
function sum(a, b) {
    // a and b are either of type string or number
    // therefore we can only use methods on them,
    // that are common between strings and numbers
    // i.e. .toString() and .valueOf()
    if (typeof a === 'string' && typeof b === 'string') {
        // both a and b are guaranteed to be of type string
        // can call all string methods on them
        return a.toUpperCase() + b.toUpperCase();
    }
    if (typeof a === 'number' && typeof b === 'number') {
        // both a and b are guaranteed to be of type number
        // can call all number methods on them
        return a.toFixed(2) + b.toFixed(2);
    }
    if (typeof a === 'string' || typeof b === 'string') {
        // we don't know if a or b is the string,
        // so we don't get to call string methods on either one of them
        return String(a) + String(b);
    }
    // we have exhausted all the possibilities
    // Now a and b are guaranteed to be of type 'number'
    return a.toFixed(2) + b.toFixed(2);
}
console.log(sum('Win', 'Together'));
console.log(sum(3, 14.5));
