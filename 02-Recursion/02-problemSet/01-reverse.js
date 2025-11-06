/**
 *  reverse
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.

    // reverse('awesome') // 'emosewa'
   // reverse('rithmschool') // 'loohcsmhtir'
 */

   function reverse(str) {
        // ✅ Step 1: Initialize an empty string to store the reversed result
        let rev = "";

        // ✅ Step 2: Start recursion from the last index
        let index = str.length;

            // ✅ Step 3: Define a helper recursive function
            function helper(index) {

                // ✅ Base case: when index becomes less than 0, stop recursion
                // Return the reversed string (trim removes any accidental spaces)
                if (index < 0) {
                    return rev.trim();
                }

                // ✅ Step 4: If the current index is valid, add the character to 'rev'
                if (str[index] !== undefined) {
                    rev += str[index];
                }

                // ✅ Step 5: Recursive call with index decremented
                return helper(--index);
            }

        // ✅ Step 6: Start recursion
        helper(index);

        // ✅ Step 7: Return the reversed string
        return rev;
    }



// Without recursion using inbuilt method's in JavaScript generally refer for real world development
// function reverse(str){
//     return str
//             .split('') // Step 1: Convert string to an array of characters
//             .reverse() // Step 2: Reverse the array in place
//             .join(''); // Step 3: Join the reversed array back into a string
// }

   console.log(reverse("awesome"));
   