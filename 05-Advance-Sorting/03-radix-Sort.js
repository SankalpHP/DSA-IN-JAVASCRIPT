/**
 * SORT THE ARRAY USING THE RADIX SORT
 */

// 🔹 getDigit(): Returns the digit at a specific position in a number
// Example: getDigit(732, 1) → 3 (tens place)
function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

// 🔹 digitCount(): Returns how many digits a number has
// Example: digitCount(345) → 3
function digitcount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 🔹 mostDigit(): Returns the highest digit count among all numbers in array
// Example: [23, 5, 789] → 3 (because 789 has most digits)
function mostDigit(arr) {
    let maxDigit = 0;

    for (let i = 0; i < arr.length; i++) {
        // Track the largest number found
        maxDigit = Math.max(maxDigit, digitcount(arr[i]));
    }

    return maxDigit;
}

// 🔹 radixSort(): Main sorting algorithm using digit-by-digit processing
function radixSort(nums) {

    // Step 1️⃣: Determine how many passes needed based on longest number
    let maxDigitCount = mostDigit(nums);

    // Step 2️⃣: Perform sorting by each digit place (units, tens, hundreds...)
    for (let k = 0; k < maxDigitCount; k++) {

        // Create 10 buckets (for digits 0–9)
        let digitBuckets = Array.from({ length: 10 }, () => []);

        // Step 3️⃣: Place each number into the correct bucket based on current digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k); // Extract current digit
            digitBuckets[digit].push(nums[i]);
        }

        // Step 4️⃣: Rebuild array by flattening all buckets
        nums = digitBuckets.flat(Infinity);
    }

    // Step 5️⃣: Return fully sorted array
    return nums;
}


console.log(radixSort([23,345,5467,12,2345,9852]));

// these helper methods are valid alternative implementations for Radix Sort using string manipulation instead of math.
// They work the same way, but are easier for beginners to understand.
/**
 🔹 getDigit() — Alternate version using string conversion
    This returns the digit at a given position (right-to-left)

    Example:
    num = 7524 → "7524" → reversed → "4257"
    getDigit(7524, 0) → 4 (ones place)
    getDigit(7524, 2) → 5 (hundreds place)

    function getDigit(num, position) {
        
        // Convert number to string, split into characters, and reverse
        let numArr = String(num).split('').reverse();

        // If the requested digit exists → return it as a Number
        if (!isNaN(Number(numArr[position]))) return Number(numArr[position]);

        // If digit doesn't exist (out of range) → return 0
        return 0;
    }



 🔹 digitCount() — Alternate version using string length
    Simply counts how many characters are in the number

    Example:
    digitCount(7) → 1
    digitCount(1234) → 4

    function digitcount(num) {
        return String(num).length;
    }

 */