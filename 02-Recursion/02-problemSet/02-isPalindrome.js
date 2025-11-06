/**
 * isPalindrome
   Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
   (reads the same forward and backward). Otherwise it returns false

    isPalindrome('awesome') // false
    isPalindrome('foobar') // false
    isPalindrome('tacocat') // true
    isPalindrome('') // true
    isPalindrome('amanaplanacanalpandemonium') // false
 */

    function isPalindrome(str) {
        // ✅ Step 1: Initialize an empty string to store the reversed result
        let rev = "";

        // ✅ Step 2: Start recursion from the last index
        let index = str.length;

            // ✅ Step 3: Define a helper recursive function
            function reverse(index) {

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
                return reverse(--index);
            }

        // ✅ Step 6: Start recursion
        reverse(index);

        // ✅ Step 7: Return the true if Palindrome 
        return str === rev;
    }

    console.log(isPalindrome(" "));
    

