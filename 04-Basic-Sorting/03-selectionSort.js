/**
 *  SORT THE ARRAY USING SELECTION SORT
 * 
 *  arr = [64, 34, 25, 12, 22, 11, 90, 5]
 */

let arr = [64, 34, 25, 12, 22, 11, 90, 5];

function selectionSort(arr) {

    // ✅ Outer loop moves the boundary of the sorted part
    for (let i = 0; i < arr.length; i++) {

        // Assume the current index holds the minimum value
        let minIndex = i;

        // ✅ Inner loop: search for the smallest element 
        // in the remaining unsorted portion
        for (let j = i + 1; j < arr.length; j++) {

            // If a smaller element is found → update minIndex
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        // ✅ If we found a smaller element, swap it with the element at i
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    // Return the sorted array
    return arr;
}

console.log(selectionSort(arr));
