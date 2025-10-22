/**
 * 
    Write a function called sumZero which accepts a sorted
    array of integers. The function should find the first pair
    where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair does not exist

    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
    sumZero([-2,0,1,3]) // undefined
    sumZero([1,2,3]) // undefined
 */

let arr = [-3,-2,-1,0,1,2,3];
//          L       M     R

function sumZero(arr) {

    // ✅ Step 1: Initialize two pointers
    let left = 0;
    let right = arr.length - 1;

    // ✅ Step 2: Loop until the pointers meet
    while (left < right) {
        let sum = arr[left] + arr[right];

        // ✅ Case 1: Found a pair that sums to zero
        if (sum === 0) {
            return [arr[left], arr[right]];
        } 
        // ✅ Case 2: Sum is too large → move right pointer left
        else if (sum > 0) {
            right--;
        } 
        // ✅ Case 3: Sum is too small → move left pointer right
        else {
            left++;
        }
    }

    // ✅ Step 3: No pair found → return undefined
    return undefined;
}

console.log(sumZero(arr));
