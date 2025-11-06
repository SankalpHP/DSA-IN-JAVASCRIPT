/**
 *  capitalizeWords
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized.

    let words = ['i', 'am', 'learning', 'recursion'];
    capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

    let arr = ['i', 'am', 'learning', 'recursion'];
    
    function capitalizeWords(arr) {

        // ✅ Step 1: Start recursion from index 0
        let index = 0;

            // ✅ Step 2: Define helper function for recursion
            function helper(index) {

                // ✅ Base Case: Stop when index reaches the end of the array
                if (index === arr.length) return arr;

                // ✅ Step 3: Convert the current word to uppercase
                arr[index] = arr[index].toUpperCase();

                // ✅ Step 4: Recursive call for the next index
                return helper(++index);
            }

        // ✅ Step 5: Start recursion
        return helper(index);
    }

    console.log(capitalizeWords(arr));
