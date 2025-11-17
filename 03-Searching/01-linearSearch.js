/** 
    Linear Search
    
    Write a function called linearSearch which accepts an array and a value, 
    and returns the index at which the value exists. 
    If the value does not exist in the array, return -1.

    Don't use indexOf to implement this function!

    Examples:

    linearSearch([10, 15, 20, 25, 30], 15) // 1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
    linearSearch([100], 200) // -1
 */

    let arr = [10, 15, 20, 25, 30];

    function linearSearch(arr, val) {
        
        // ✅ Step 1: Loop through the array
        // (We check each element one by one)
        for (let index = 0; index < arr.length; index++) {

            // ✅ Step 2: Compare current element with target value
            if (arr[index] === val) {
                // ✅ Step 3: If found, return the index immediately
                return index;
            }
        }

        // ✅ Step 4: If loop finishes without finding the value, return -1
        return -1;
    }

    console.log(linearSearch(arr,15));
    