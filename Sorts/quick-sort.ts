//compile command -  FILENAME=quick-sort FOLDER=Sorts npm run compile
//output command -  FILENAME=quick-sort FOLDER=Sorts npm run output

// Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays.
// Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays.
// This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.

const array = [1, 23, 10, 5, 8, 31];
console.log(array);


function partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}


function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
}

console.log(quickSort(array, 0, array.length - 1));