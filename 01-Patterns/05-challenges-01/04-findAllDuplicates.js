/**
 *  Frequency Counter - findAllDuplicates
    Given an array of positive integers, some elements appear twice and others appear once. 
    Find all the elements that appear twice in this array. Note that you can return the elements in any order.

    findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
    findAllDuplicates([4, 3, 2, 1, 0]) // []
    findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
    Time Complexity - O(n)
 */

    function findAllDuplicates(arr){
        
        // ✅ Step 1: Create a frequency counter
        // This will store how many times each number appears in the array
        let frequency = {};

        for (const num of arr) {
            frequency[num] = (frequency[num] || 0) + 1;
        }

        // ✅ Step 2: Collect all numbers that appear more than once
        let duplicates = [];
        for (const num in frequency) {
          if(frequency[num] > 1) duplicates.push(Number(num));
        }

        // ✅ Step 3: Return the list of duplicate values
        return duplicates;
    }

    console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
    