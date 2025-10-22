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
    // Check if both arrays have the same length
    if (arr1.length !== arr2.length) return false;

    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {

        // Find the index of the square of arr1[i] in arr2
        let currentIndex = arr2.indexOf(arr1[i] ** 2);

        // If not found, return false
        if (currentIndex === -1) return false;

        // Remove the found element to avoid reuse
        arr2.splice(currentIndex, 1);
    }
    // If all elements match, return true
    return true;
}

console.log(same(arr1,arr2));
