/** 
    Frequency Counter / Multiple Pointer - findPair
    Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
    This function should return true if the pair exists or false if it does not.

    findPair([6,1,4,10,2,4], 2) // true
    findPair([8,6,2,4,1,0,2,5,13],1) // true
    findPair([4,-2,3,10],-6) // true
    findPair([6,1,4,10,2,4], 22) // false
    findPair([], 0) // false
    findPair([5,5], 0) // true
    findPair([-4,4], -8) // true
    findPair([-4,4], 8) // true
    findPair([1,3,4,6],-2) // true
    findPair([0,1,3,4,6],-2) // true
    findPair([1,2,3], 0) // false
    Part 1 - solve this with the following requirements:

    Time Complexity Requirement - O(n)

    Space Complexity Requirement - O(n)

    Part 2 - solve this with the following requirements:

    Time Complexity Requirement - O(n log n)

    Space Complexity Requirement - O(1)
 */

    let arr = [6,1,4,10,2,4];
    let n = 22;

    function findPair(arr, n) {
        if (arr.length === 0) return false;

        // Sort the array in ascending order
        let sortedArr = arr.toSorted((a, b) => a - b);

        let left = 0;
        let right = 1;

        while (right < sortedArr.length) {
            let diff = sortedArr[right] - sortedArr[left];

            if (diff === Math.abs(n)) return true;

            // If difference is too small → move right pointer forward
            else if (diff < Math.abs(n)) right++;

            // If difference is too big → move left pointer forward
            else left++;

            // Prevent left catching up to right
            if (left === right) right++;
        }

        return false;
    }

    console.log(findPair(arr,n));
    