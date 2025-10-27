/**
 *  Frequency Counter - sameFrequency
 
    Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

    Your solution MUST have the following complexities:

    Time: O(N)

    Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
 */

    function sameFrequency(num1, num2) {
    
        // ✅ Step 1: Convert both numbers to arrays of digits
        let digit1 = String(num1).split('').map(Number);
        let digit2 = String(num2).split('').map(Number);

        // ✅ Step 2: If digit counts differ, they can’t have same frequency
        if (digit1.length !== digit2.length) return false;

        // ✅ Step 3: Count frequency of each digit in num1
        let frequency1 = {};
        for (const n of digit1) {
            frequency1[n] = (frequency1[n] || 0) + 1;
        }

        // ✅ Step 4: Count frequency of each digit in num2
        let frequency2 = {};
        for (const n of digit2) {
            frequency2[n] = (frequency2[n] || 0) + 1;
        }

        // ✅ Step 5: Compare both frequency objects
        for (const key in frequency1) {
            if (frequency1[key] !== frequency2[key]) return false;
        }

        // ✅ Step 6: All digits have same frequency
        return true;
    }


    console.log(sameFrequency(3589578,5879385));
    