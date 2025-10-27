/**
 *  
    Multiple Pointers - averagePair
    Write a function called averagePair. Given a sorted array of integers and a target average, 
    determine if there is a pair of values in the array where the average of the pair equals the target average. 
    There may be more than one pair that matches the average target.

    Bonus Constraints:

    Time: O(N)

    Space: O(1)

    Sample Input:

    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false
 */

    let arr = [1,3,3,5,6,7,10,12,19];
    //         L                  R
    let avg = 8;

    function averagePair(arr, avg) {

        // ✅ Step 1: Edge case — if array is empty, no pairs exist
        if (arr.length === 0) return false;

        // ✅ Step 2: Initialize two pointers
        let left = 0;
        let right = arr.length - 1;

        // ✅ Step 3: Loop until pointers meet
        while (left < right) {

            // Calculate the average of the two numbers
            let result = (arr[left] + arr[right]) / 2;

            // ✅ Case 1: If average matches target → found a valid pair
            if (result === avg) {
                return true;
            } 
            // ✅ Case 2: If current average is smaller → move left pointer to increase sum
            else if (result < avg) {
                left++;
            } 
            // ✅ Case 3: If current average is larger → move right pointer to decrease sum
            else {
                right--;
            }
        }

        // ✅ Step 4: No matching pair found
        return false;
    }


    console.log(averagePair(arr,avg));
    