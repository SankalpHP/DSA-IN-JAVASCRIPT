/**
 *  flatten
    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */


    function flatten(arr){
        let flatted = [];
        function helper(arr){
            // base condition
            if(arr.length <= 0) return flatted;
            // business logic
            if(Array.isArray(arr[0])){
                // rescursive call with diff input
                helper(arr[0]);
            }else{
                flatted.push(arr[0])
            }
            return helper(arr.slice(1));
        }
        return helper(arr)
    }

    console.log(flatten([1, [2, [3, 4], [[5]]]]));

    // Another way that is with flatten method
    // function flatten(arr) {
    //     // ✅ Step 1: Use Array.prototype.flat() to flatten nested arrays
    //     // The parameter 'Infinity' ensures all levels of nesting are flattened
    //     // (e.g., [[1, [2]], [3, [4, [5]]]] → [1, 2, 3, 4, 5])
    //     return arr.flat(Infinity);
    // }
    