/**
 *  
    Frequency Counter / Multiple Pointers - areThereDuplicates
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    and checks whether there are any duplicates among the arguments passed in.  
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.

    Examples:
     1) areThereDuplicates(1, 2, 3) // false
     2) areThereDuplicates(1, 2, 2) // true 
     3) areThereDuplicates('a', 'b', 'c', 'a') // true 

    Restrictions:

    Time - O(n)

    Space - O(n)

    Bonus:

    Time - O(n log n)

    Space - O(1)
 */

  function areThereDuplicates(...Input) {

        // ✅ Step 1: Create a frequency counter object
        let frequency = {};

        // ✅ Step 2: Count how many times each value appears
        for (const n of Input) {
            frequency[n] = (frequency[n] || 0) + 1;
        }

        // ✅ Step 3: Check if any value appears more than once
        for (const key in frequency) {
            if (frequency[key] > 1) return true; // Duplicate found
        }

        // ✅ Step 4: No duplicates found
        return false;
    }


    console.log(areThereDuplicates('a','b','c','a'));
    