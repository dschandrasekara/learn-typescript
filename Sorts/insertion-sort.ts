//compile command -  FILENAME=insertion-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=insertion-sort FOLDER=Sorts npm run output

// This is an in-place comparison-based sorting algorithm.
// Here, a sub-list is maintained which is always sorted.
// This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2).

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

let current: number;
let j: number;
for (var i = 1; i < array.length; i += 1) {
    // select value to be inserted
    current = array[i];
    j = i - 1;

    // locate hole position for the element to be inserted
    while (j >= 0 && array[j] - current > 0) {
        array[j + 1] = array[j];
        j -= 1;
    }

    // insert the number at hole position
    array[j + 1] = current;
}

console.log(array);