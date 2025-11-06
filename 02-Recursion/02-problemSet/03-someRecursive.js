/**
 *  someRecursive
 * 
    Write a recursive function called someRecursive which accepts an array and a callback. 
    The function returns true if a single value in the array returns true when passed to the callback. 
    Otherwise it returns false.

    // SAMPLE INPUT / OUTPUT
    const isOdd = val => val % 2 !== 0;

    someRecursive([1,2,3,4], isOdd) // true
    someRecursive([4,6,8,9], isOdd) // true
    someRecursive([4,6,8], isOdd) // false
    someRecursive([4,6,8], val => val > 10); // false
 */

    function someRecursive(arr, callback) {
        // ✅ Base case: if the array is empty → no elements left to check
        if (arr.length === 0) return false;

        // ✅ Step 1: Check the first element with the callback function
        // If it passes the test (e.g., isOdd returns true), return true immediately
        if (callback(arr[0])) return true;

        // ✅ Step 2: Otherwise, recursively check the rest of the array
        // Pass the same callback function, not calling it directly
        return someRecursive(arr.slice(1), callback);
    }

    // ✅ Example callback function
    // Checks whether a number is odd
    function isOdd(num) {
        return num % 2 !== 0;
    }

    console.log(someRecursive([4,6,8],isOdd));
    