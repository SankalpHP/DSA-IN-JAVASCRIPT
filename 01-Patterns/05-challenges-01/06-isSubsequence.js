/**
 * Multiple Pointers - isSubsequence
 *
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a
 * subsequence of the characters in the second string.
 *
 * A subsequence means:
 * - All characters of str1 must appear in str2
 * - The order of characters must remain the same
 * - The characters do NOT need to be next to each other
 *
 * Examples:
 *
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting');        // true
 * isSubsequence('abc', 'abracadabra');   // true
 * isSubsequence('abc', 'acb');           // false
 *
 * Time Complexity: O(N + M)
 * Space Complexity: O(1)
 */

function isSubsequence(str1, str2) {

    // i is used to keep track of the current character
    // we are looking for in str1.
    let i = 0;

    // j is used to traverse through str2.
    // We will check every character of str2.
    let j = 0;

    /**
     * Continue until we have checked all characters of str2.
     */
    while (j < str2.length) {

        /**
         * Compare the current characters.
         *
         * str1[i] -> character we are currently searching for
         * str2[j] -> current character in the second string
         *
         * If they match, move i forward because we have
         * successfully found the current character of str1.
         */
        if (str1[i] === str2[j]) {
            i++;
        }

        /**
         * If i reaches the length of str1, it means every
         * character from str1 has been successfully found
         * inside str2 in the correct order.
         *
         * Therefore, str1 is a subsequence of str2.
         */
        if (i === str1.length) {
            return true;
        }

        /**
         * Move j forward to check the next character
         * of str2.
         *
         * Notice that j always moves forward, regardless
         * of whether we found a match or not.
         */
        j++;
    }

    /**
     * If we reach here, it means we went through all
     * of str2 but did not find every character of str1.
     *
     * Therefore, str1 is NOT a subsequence of str2.
     */
    return false;
}


console.log(isSubsequence('hello', 'hello world'));
// true

console.log(isSubsequence('sing', 'sting'));
// true

console.log(isSubsequence('abc', 'abracadabra'));
// true

console.log(isSubsequence('abc', 'acb'));
// false