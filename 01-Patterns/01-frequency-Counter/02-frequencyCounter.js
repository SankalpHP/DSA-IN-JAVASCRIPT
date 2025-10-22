/**
        Write a function called same, which accepts two arrays.
        The function should return true if every value in the array
        has it's corresponding value squared in the second array.
        The frequency of values must be the same.

        same([1,2,3], [4,1,9]) // true
        same([1,2,3], [1,9]) // false
        same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

let arr1 = [1,2,3];
let arr2 = [4,1,9];

function same(arr1, arr2) {

    // ✅ Step 1: If array lengths differ, they can’t match
    if (arr1.length !== arr2.length) return false;

    // ✅ Step 2: Build frequency counter for arr1
    // Counts how many times each number appears
    let frequency1 = {};
    for (const ch of arr1) {
        frequency1[ch] = (frequency1[ch] || 0) + 1;
    }

    // ✅ Step 3: Build frequency counter for arr2
    // Counts how many times each squared number appears
    let frequency2 = {};
    for (const ch of arr2) {
        frequency2[ch] = (frequency2[ch] || 0) + 1;
    }

    // ✅ Step 4: Compare frequencies
    for (const ch in frequency1) {

        // Check if the square of the number exists in arr2
        if (Object.keys(frequency2).includes(`${ch ** 2}`)) {

            // Check if the frequency matches for the squared value
            if (frequency1[ch] !== frequency2[ch ** 2]) return false;

        } else return false; // Square value not found
    }

    // ✅ Step 5: All checks passed → arrays match
    return true;
}
 
console.log(same(arr1,arr2));