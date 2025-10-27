/**
 * 
    Frequency Counter - constructNote

    Write a function called constructNote, which accepts two strings, a message and some letters. 
    The function should return true if the message can be built with the letters that you are given, or it should return false.

    Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

    Bonus Constraints:

    If M is the length of message and N is the length of letters:

    Time Complexity: O(M+N)

    Space Complexity: O(N)

    Examples:

    constructNote('aa', 'abc') // false
    constructNote('abc', 'dcba') // true
    constructNote('aabbcc', 'bcabcaddff') // true
 */
    function constructNote(message, alfa) {

        // ✅ Step 1: Create frequency counter for 'message'
        // Counts how many times each character is needed
        let Frequency1 = {};
        for (const ch of message) {
            Frequency1[ch] = (Frequency1[ch] || 0) + 1;
        }

        // ✅ Step 2: Create frequency counter for 'alfa'
        // Counts how many times each character is available
        let Frequency2 = {};
        for (const ch of alfa) {
            Frequency2[ch] = (Frequency2[ch] || 0) + 1;
        }

        // ✅ Step 3: Compare frequencies
        for (const key in Frequency1) {
            // If a character is missing or not enough in 'alfa'
            if (Frequency1[key] > (Frequency2[key] || 0)) return false;
        }

        // ✅ Step 4: All characters are available → message can be constructed
        return true;
    }

    console.log(constructNote('aabbcc','bcabcaddff'));
    