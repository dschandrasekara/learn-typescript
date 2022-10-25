//compile command -  FILENAME=counting-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=counting-sort FOLDER=Sorts npm run output

// This is a stable, not in-place sorting algorithm.
// This algorithm suitable for large data sets as its average and worse case complexity are of Ο(n).

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

function countingSort(arr) {
    return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
            .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] ); 
}

console.log(countingSort(array));