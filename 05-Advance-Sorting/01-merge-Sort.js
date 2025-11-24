/**
 *  SORT THE ARRAY USING THE MERGE SORT
 */


// 🔹 merge(): Merges two sorted arrays into a single sorted array
function merge(arr1, arr2) {

    let i = 0;             // Pointer for arr1
    let j = 0;             // Pointer for arr2
    let mergeArr = [];     // Result array to store merged sorted values

    // 🔹 Compare elements from both arrays one by one
    while (i < arr1.length && j < arr2.length) {

        // If arr2[j] is smaller → push it into merged array
        if (arr1[i] > arr2[j]) {
            mergeArr.push(arr2[j]);
            j++;           // Move pointer in arr2
        } 
        // Otherwise push arr1[i]
        else {
            mergeArr.push(arr1[i]);
            i++;           // Move pointer in arr1
        }
    }

    // 🔹 If arr1 still has remaining elements → push all
    while (i < arr1.length) {
        mergeArr.push(arr1[i]);
        i++;
    }

    // 🔹 If arr2 still has remaining elements → push all
    while (j < arr2.length) {
        mergeArr.push(arr2[j]);
        j++;
    }

    return mergeArr;       // Return fully merged sorted array
}



// 🔹 mergeSort(): Recursively divides the array and merges sorted halves
function mergeSort(arr) {

    // ✅ Base Case: A single element (or empty array) is already sorted
    if (arr.length <= 1) return arr;

    // 🔹 Step 1: Find the middle index
    let mid = Math.floor(arr.length / 2);

    // 🔹 Step 2: Recursively sort the left half
    let left = mergeSort(arr.slice(0, mid));

    // 🔹 Step 3: Recursively sort the right half
    let right = mergeSort(arr.slice(mid));

    // 🔹 Step 4: Merge the two sorted halves and return the result
    return merge(left, right);
}


console.log(mergeSort([10,24,76,73]));
