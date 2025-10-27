/**
 *  
    Given a sorted array of integers, write a function
    called search, that accepts a value and returns the
    index where the value passed to the function is
    located. If the value is not found, return -1

    search([1,2,3,4,5,6],4) // 3
    search([1,2,3,4,5,6],6) // 5
    search([1,2,3,4,5,6],11) // -1
 */

    let arr = [1,2,3,4,5,6];
    let n = 3;

    function search(arr, n) {

        // ✅ Step 1: Initialize two pointers for search boundaries
        let left = 0;
        let right = arr.length - 1;

        // ✅ Step 2: Keep searching while the window is valid
        while (left <= right) {

            // Find the middle index
            let middle = Math.floor((left + right) / 2);

            // ✅ Case 1: Target found
            if (arr[middle] === n) {
                return arr[middle];
            }
            // ✅ Case 2: Target is greater → search in right half
            else if (arr[middle] < n) {
                left = middle + 1;
            }
            // ✅ Case 3: Target is smaller → search in left half
            else {
                right = middle - 1;
            }
        }

        // ✅ Step 3: Element not found
        return -1;
    }


    console.log(search(arr,n));
    