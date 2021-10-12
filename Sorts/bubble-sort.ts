// Bubble sort is a simple sorting algorithm. 
// This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.
// This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2).

let array: number[] = [1, 23, 10, 5, 8, 31];
console.log(array);

for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
        // compare the adjacent elements
        if (array[j] > array[j + 1]) {
            let swap = array[j];
            array[j] = array[j + 1];
            array[j + 1] = swap;
            swapped = true;
        }
    }

    // if no number was swapped that means array is sorted now, break the loop
    if (!swapped) {
        break;
    }
}

console.log(array);