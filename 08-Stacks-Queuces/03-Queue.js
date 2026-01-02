/**
 * QUEUE IMPLEMENTATION USING ARRAY
 * FIFO – First In, First Out
 */

let queue = [];

// 🔹 Enqueue → Add elements at the end of the queue
queue.push("Sankalp");
console.log(queue); // ["Sankalp"]

queue.push("Sahil");
console.log(queue); // ["Sankalp", "Sahil"]

queue.push("Rohan");
console.log(queue); // ["Sankalp", "Sahil", "Rohan"]

queue.push("Rahul");
console.log(queue); // ["Sankalp", "Sahil", "Rohan", "Rahul"]

console.log("==========================================================");

// 🔹 Dequeue → Remove elements from the front of the queue
queue.shift(); // Removes "Sankalp"
console.log(queue); // ["Sahil", "Rohan", "Rahul"]

queue.shift(); // Removes "Sahil"
console.log(queue); // ["Rohan", "Rahul"]

queue.shift(); // Removes "Rohan"
console.log(queue); // ["Rahul"]

queue.shift(); // Removes "Rahul"
console.log(queue); // []

/**
 *  
        You implemented a Queue (FIFO – First In, First Out) using:

        push() → enqueue (add at the end)

        shift() → dequeue (remove from the front)

        This behaves correctly as a queue.

        ⚠️ Important Performance Note (Interview Point)

        push() → O(1) ✅

        shift() → O(n) ❌

        Why?

        Because shift() removes the first element and reindexes all remaining elements in the array.

        This is fine for small data, but not optimal for large queues.

        Using arrays, queues can be implemented with push and shift, but shift is O(n).
        For optimal O(1) enqueue and dequeue, a linked list–based queue is preferred.
 */