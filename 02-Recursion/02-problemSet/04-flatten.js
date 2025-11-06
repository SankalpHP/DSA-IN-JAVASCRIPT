/**
 *  flatten
    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

  function flatten(arr) {
    // ✅ Step 1: Use Array.prototype.flat() to flatten nested arrays
    // The parameter 'Infinity' ensures all levels of nesting are flattened
    // (e.g., [[1, [2]], [3, [4, [5]]]] → [1, 2, 3, 4, 5])
    return arr.flat(Infinity);
}

    console.log(flatten([1, [2, [3, 4], [[5]]]]));
    