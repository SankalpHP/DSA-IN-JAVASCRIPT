/**
 *  
    Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the
    unique values in the array. There can be negative
    numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
 */

    let arr = [-2,-1,-1,0,1];
    //         i j

   function countUniqueValues(arr) {
    
        // ✅ Step 1: Handle edge case — empty array
        if (arr.length === 0) return 0;

        // ✅ Step 2: Initialize two pointers
        // 'i' tracks the position of unique values
        // 'j' scans through the array
        let i = 0;
        let j = 1;

        // ✅ Step 3: Move 'j' until end of array
        while (j < arr.length) {

            // If current values are different → found a new unique value
            if (arr[i] !== arr[j]) {
                i++;                // Move unique index forward
                arr[i] = arr[j];    // Update the next unique position
            }

            // Always move 'j' forward
            j++;
        }

        // ✅ Step 4: Number of unique values = index + 1
        return i + 1;
    }

    console.log(countUniqueValues(arr));
    