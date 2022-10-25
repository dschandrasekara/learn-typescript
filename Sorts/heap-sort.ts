//compile command -  FILENAME=heap-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=heap-sort FOLDER=Sorts npm run output

// This is an in-place, unstable, comparison-based sorting algorithm.
// Worst-case time complexity being Ο(n log n)

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

public heapSort(arr: number[]) {
    const size = arr.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        this.heapify(arr, size, i);
    }

    let j = size - 1;
    while(j >= 1) {
        this.swap(arr, 0, j);
        this.heapify(arr, j, 0);
        j--;
    }
}

private heapify(arr: number[], size: number, i: number) {
    let largest = i;

    let leftLeaf = 2 * i + 1;
    let rightLeaf = 2 * i + 2;

    // If the left child is larger than the current largest.
    if (leftLeaf < size && arr[leftLeaf] > arr[largest]) {
        largest = leftLeaf;
    }
    // If the right child is larger than the current largest.
    if (rightLeaf < size && arr[rightLeaf] > arr[largest]) {
        largest = rightLeaf;
    }
    // If the largest of the two is not the original largest
    if (largest != i) {
        // Swap i and the largest.
        this.swap(arr, i, largest);
        // Heapify the sub-tree. 
        this.heapify(arr, size, largest); 
    }
}

private swap(arr: number[], a: number, b: number) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

console.log(heapSort(array));