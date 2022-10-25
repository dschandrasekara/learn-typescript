//compile command -  FILENAME=radix-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=radix-sort FOLDER=Sorts npm run output

// This is a stable, not in-place sorting algorithm.
// This algorithm is not suitable for large data sets as its worse case complexity is of Ο(n2).

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

const radixSort = arr => {
    let maxLength = largestNum(arr);

    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            let num = getNum(arr[j], i);
            if (num !== undefined) buckets[num].push(arr[j]);
        }
        
        arr = buckets.flat();
    }
    
    return arr;
};

console.log(radixSort(array));