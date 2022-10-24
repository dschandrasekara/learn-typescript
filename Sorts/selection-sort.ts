//compile command -  FILENAME=selection-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=selection-sort FOLDER=Sorts npm run output

// This is an in-place, unstae sorting algorithm.
// This algorithm is not suitable for large data sets as its average and worse case complexity are of Ο(n2).

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
            // select the minimum number
            min = j;
        }
    }
    // In-place swap:
    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
}

console.log(array);