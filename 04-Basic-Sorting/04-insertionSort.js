/**
 * SORT THE ARRAY USING INSERTION SORT
 * 
 * arr = [64, 34, 25, 12, 22, 11, 90, 5]
 *       [34, 64, 25, 12, 22, 11, 90, 5]
 *       [25, 34, 64, 12, 22, 11, 90, 5]
 */

let arr = [2, 1, 9, 76, 4];
//         0  1  2  3   4

function insertionSort(arr) {

    // ✅ Start from index 1 because the element at index 0 
    // is considered already in the "sorted" portion
    for (let i = 1; i < arr.length; i++) {

        // The value we want to insert into the sorted portion
        let currentValue = arr[i];

        // j will traverse left from (i - 1)
        let j = i - 1;

        // ✅ Shift all elements in the sorted portion (arr[0..i-1])
        // that are greater than currentValue, to the right by 1 index
        //
        // This creates the correct empty position for currentValue.
        for (j; j >= 0 && arr[j] >= currentValue; j--) {
            arr[j + 1] = arr[j];     // Shift element right
        }

        // ✅ Insert currentValue into the correct empty spot
        arr[j + 1] = currentValue;
    }

    // Return the sorted array
    return arr;
}


console.log(insertionSort(arr));