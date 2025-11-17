/**
 *  Binary Search Exercise
    Write a function called binarySearch which accepts a sorted array 
    and a value and returns the index at which the value exists. 
    Otherwise, return -1.

    Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
 */

  function binarySearch(arr, target) {
    // ✅ Step 1: Initialize two pointers for the search range
      let leftPointer = 0;
      let rightPointer = arr.length - 1;

         // ✅ Step 2: Continue searching while the range is valid
         while (leftPointer <= rightPointer) {

            // ✅ Step 3: Find the middle index of the current range
            let midPointer = Math.floor((leftPointer + rightPointer) / 2);

               // ✅ Step 4: Check if the middle element matches the target
               if (target === arr[midPointer]) {
                  return midPointer; // Found! Return the index
               } 
               // ✅ Step 5: If target is greater, ignore the left half
               else if (target > arr[midPointer]) {
                  leftPointer = midPointer + 1;
               } 
               // ✅ Step 6: If target is smaller, ignore the right half
               else {
                  rightPointer = midPointer - 1;
               }
         }

      // ✅ Step 7: If not found, return -1
      return -1;
   }

// ✅ Example test case
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],100)); // ❌ Output: -1 (100 not found)

    