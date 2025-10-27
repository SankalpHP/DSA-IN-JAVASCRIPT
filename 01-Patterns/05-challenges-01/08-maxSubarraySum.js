/** 
    Sliding Window - maxSubarraySum
    Given an array of integers and a number, write a function called maxSubarraySum, 
    which finds the maximum sum of a subarray with the length of the number passed to the function.

    Note that a subarray must consist of consecutive elements from the original array. 
    In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
    Constraints:

    Time Complexity - O(N)

    Space Complexity - O(1)
 */

    let arr = [2,3];
    //          -   -
    let n = 3;

    function maxSubarraySum(arr, n) {
        // ✅ Step 1: Edge case — if array length is smaller than window size
        if (arr.length < n) return null;

        // ✅ Step 2: Calculate the sum of the first 'n' elements (initial window)
        let max = 0;
        for (let i = 0; i < n; i++) {
            max += arr[i];
        }

        // ✅ Step 3: Store initial sum as temporary sum
        let tempSum = max;

        // ✅ Step 4: Slide the window through the array
        for (let i = n; i < arr.length; i++) {
            // Subtract the element that’s leaving the window (arr[i - n])
            // Add the element that’s entering the window (arr[i])
            tempSum = tempSum - arr[i - n] + arr[i];

            // ✅ Step 5: Update max if the current window sum is greater
            max = Math.max(tempSum, max);
        }

        // ✅ Step 6: Return the maximum sum found
        return max;
    }

    console.log(maxSubarraySum(arr,n));
    