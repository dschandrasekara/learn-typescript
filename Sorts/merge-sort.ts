//compile command -  FILENAME=merge-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=merge-sort FOLDER=Sorts npm run output

// Merge sort is a sorting technique based on divide and conquer technique.
// Merge sort first divides the array into equal halves and then combines them in a sorted manner.
// Worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

function divide(array: number[]): number[] {
    var halfLength = Math.ceil(array.length / 2);
    var low = array.slice(0, halfLength);
    var high = array.slice(halfLength);
    if (halfLength > 1) {
        low = divide(low);
        high = divide(high);
    }
    return combine(low, high);
}

function combine(low: number[], high: number[]): number[] {
    var indexLow = 0;
    var indexHigh = 0;
    var lengthLow = low.length;
    var lengthHigh = high.length;
    var combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
        var lowItem = low[indexLow];
        var highItem = high[indexHigh];
        if (lowItem !== undefined) {
            if (highItem === undefined) {
                combined.push(lowItem);
                indexLow++;
            } else {
                if (lowItem <= highItem) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        } else {
            if (highItem !== undefined) {
                combined.push(highItem);
                indexHigh++;
            }
        }
    }
    return combined;
}

console.log(divide(array));