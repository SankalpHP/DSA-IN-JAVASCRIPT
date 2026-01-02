/**
 * STACK IMPLEMENTATION USING ARRAY (LIFO – Last In, First Out)
 *
 * In JavaScript, an array can naturally behave like a stack
 * using push() and pop() methods.
 */

let stack = [];

// 🔹 push() → Adds an element to the top of the stack
stack.push("Google.com");
stack.push("Youtube.com");
stack.push("Udemy.com");
stack.push("ChaiorCode.com");

console.log(stack);
// Output:
// ["Google.com", "Youtube.com", "Udemy.com", "ChaiorCode.com"]

// 🔹 pop() → Removes the element from the top of the stack
stack.pop(); // Removes "ChaiorCode.com"
stack.pop(); // Removes "Udemy.com"
stack.pop(); // Removes "Youtube.com"

console.log(stack);
// Output:
// ["Google.com"]

/**
 * IMPORTANT NOTE:
 *
 * ✔ push() and pop() both work in O(1) time complexity.
 * ✔ This makes them ideal for stack implementation.
 *
 * ⚠ You can also implement a stack using:
 *      - unshift() → push at the beginning
 *      - shift()   → pop from the beginning
 *
 * ❌ But unshift() and shift() are O(n) operations because:
 *      - All elements must be reindexed after insertion/removal.
 *
 * ✅ Therefore, push() and pop() are always preferred
 * when implementing a stack using arrays.
 */
