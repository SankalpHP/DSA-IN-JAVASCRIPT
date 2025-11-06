/**
 *  capitalizeFirst
    Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

    Input/Output
    capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

    function capitalizeFirst(arr) {

        // ✅ Step 1: Start recursion from index 0
        let index = 0;

            // ✅ Step 2: Helper function handles recursion logic
            function helper(index) {

                // ✅ Base Case: stop when index reaches the end of the array
                if (index === arr.length) return arr;

                // ✅ Step 3: Split the current word into array of characters
                let chArr = arr[index].split('');

                // ✅ Step 4: Convert the first character to uppercase
                chArr[0] = chArr[0].toUpperCase();

                // ✅ Step 5: Join array of characters back to form the updated word
                arr[index] = chArr.join('');

                // ✅ Step 6: Recursive call for the next element
                return helper(++index);
            }

        // ✅ Step 7: Start recursion
        return helper(index);
    }


    let arr = ['car','taco','banana'];
    // let chArr = arr[0].split("");
    // chArr[0] = chArr[0].toUpperCase()
    // console.log(chArr.join(''));
    // arr[0] = chArr.join('');
    // console.log(arr);

    // ✅ Example test case
    console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ✅ ['Car', 'Taco', 'Banana']
    