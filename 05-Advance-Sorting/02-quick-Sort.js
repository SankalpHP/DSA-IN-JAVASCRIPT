/**
 *  Sort the array using the quick sort
*/


let arr = [4,8,2,1,5,7,6,3];

// 🔹 pivot(): Places the pivot element in its correct sorted position
// and rearranges elements smaller than pivot to the left, larger to the right.
function pivot(arr, start, end) {

    let pivot = arr[start];   // Choose the first element as pivot
    let swapIndex = start;     // Tracks correct position for pivot placement

    // Loop through rest of array to compare values with pivot
    for (let i = start + 1; i <= end; i++) {

        // If a value is smaller than pivot, move swapIndex forward and swap
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    // 🔹 Final swap: place pivot in its final sorted position
    swap(arr, start, swapIndex);

    // Helper function to swap two values in the array
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    return swapIndex; // Return pivot's final index
}



// 🔹 quickSort(): Recursively sorts array using divide-and-conquer strategy
function quickSort(arr, left = 0, right = arr.length - 1) {

    // Base condition: subarray must contain more than one element
    if (left < right) {

        // Partition array and get pivot index after sorting around pivot
        let pivotIndex = pivot(arr, left, right);

        // 🔹 Recursively apply quickSort to the left side of pivot
        quickSort(arr, left, pivotIndex - 1);

        // 🔹 Recursively apply quickSort to the right side of pivot
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr; // Return sorted array
}


console.log(quickSort(arr));
