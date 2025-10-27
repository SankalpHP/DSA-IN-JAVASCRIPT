/**
 *  Write a function called maxSubarraySum which accepts
    an array of integers and a number called n. The function
    should calculate the maximum sum of n consecutive
    elements in the array.

     maxSubarraySum([1,2,5,2,8,1,5],2) // 10
     maxSubarraySum([1,2,5,2,8,1,5],4) // 17
     maxSubarraySum([4,2,1,6],1) // 6
     maxSubarraySum([4,2,1,6,2],4) // 13
     maxSubarraySum([],4) // null
 */

     let arr = [1,2,5,2,8,1,5];
     //         - -    
     let n = 2;

    function maxSubarraySum(arr, n) {

        // ✅ Step 1: Edge case — if window size is bigger than array length
        if (arr.length < n) return null;

        // ✅ Step 2: Calculate the sum of the first 'n' elements
        let maxSum = 0;
        for (let i = 0; i < n; i++) {
            maxSum += arr[i];
        }

        // ✅ Step 3: Store it as initial temporary sum
        let tempSum = maxSum;

        // ✅ Step 4: Slide the window across the array
        for (let i = n; i < arr.length; i++) {
            // Subtract the element going out of the window (arr[i - n])
            // and add the new element coming in (arr[i])
            tempSum = tempSum - arr[i - n] + arr[i];

            // Update maxSum if current window sum is greater
            maxSum = Math.max(tempSum, maxSum);
        }

        // ✅ Step 5: Return the maximum sum found
        return maxSum;
    }


     console.log(maxSubarraySum(arr,n));
     