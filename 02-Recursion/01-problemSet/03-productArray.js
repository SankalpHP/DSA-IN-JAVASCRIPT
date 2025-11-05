/**
 * productOfArray
   Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

   productOfArray([1,2,3]) // 6
   productOfArray([1,2,3,10]) // 60

   hints:-
   [1,2,3] -> recursive call with different input
   [1,2]  -> recursive call with different input
   [1]  -> recursive call with different input
   [] -> base case
 */

// function productOfArray(arr){
//    let ressult = 1;
//    for (let index = 0; index < arr.length; index++) {
//       ressult *= arr[index];
//    }
//    return ressult;
// }

function productOfArray(arr){
    // BASE CASE: if array is empty, return 1 (neutral element for multiplication)
      if (arr.length === 0) return 1;
    // Recursive case:
    // Take the first element * product of the rest of the array;
    return arr[0] * productOfArray(arr.slice(1));
}


console.log(productOfArray([1,2,3]));
