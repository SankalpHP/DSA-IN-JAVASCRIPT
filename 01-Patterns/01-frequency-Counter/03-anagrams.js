/**
 *  Given two strings, write a function to determine if the
    second string is an anagram of the first. An anagram is
    a word, phrase, or name formed by rearranging the
    letters of another, such as cinema, formed from iceman.

    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false) // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') // true
 */

    let str1 = 'texttwisttime';
    let str2 = 'timetwisttext';

    function validAnagram(str1, str2) {

        // ✅ Step 1: If lengths differ, they can't be anagrams
        if (str1.length !== str2.length) return false;

        // ✅ Step 2: Count character frequency in str1
        let frequency1 = {};
        for (const ch of str1) {
            frequency1[ch] = (frequency1[ch] || 0) + 1;
        }

        // ✅ Step 3: Count character frequency in str2
        let frequency2 = {};
        for (const ch of str2) {
            frequency2[ch] = (frequency2[ch] || 0) + 1;
        }

        // ✅ Step 4: Compare both frequency objects
        for (const ch in frequency1) {
            // If any character count doesn’t match, not an anagram
            if (frequency1[ch] !== frequency2[ch]) return false;
        }

        // ✅ Step 5: All characters matched → it’s a valid anagram
        return true;
    }

    console.log(validAnagram(str1,str2));
    