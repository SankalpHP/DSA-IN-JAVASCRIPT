/**
 * QUEUE IMPLEMENTATION USING SINGLY LINKED LIST
 * 
 * FIFO – First In, First Out
 * Enqueue & Dequeue operations run in O(1) time
 */

// Node represents a single element in the queue
class Node {
    constructor(val) {
        this.val = val;      // Value stored in the node
        this.next = null;    // Pointer to the next node
    }
}

// Queue class using a linked list
class Queue {
    constructor() {
        this.front = null;   // Front of the queue
        this.rear = null;    // Rear of the queue
        this.size = 0;       // Number of elements in the queue
    }

    /**
     * enqueue(val)
     * Adds a value to the end of the queue
     * Time Complexity: O(1)
     */
    enqueue(val) {
        let newNode = new Node(val);

        // If queue is empty
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } 
        // If queue has elements
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        return ++this.size;
    }

    /**
     * dequeue()
     * Removes a value from the front of the queue
     * Time Complexity: O(1)
     */
    dequeue() {
        if (this.size === 0) return null;

        let removeNode = this.front;

        // If only one element exists
        if (this.size === 1) {
            this.front = null;
            this.rear = null;
        } 
        // More than one element
        else {
            this.front = removeNode.next;
            removeNode.next = null;
        }

        this.size--;
        return removeNode.val;
    }
}

// Testing the queue
let queue = new Queue();
queue.enqueue("Sankalp");
queue.enqueue("Sahil");
queue.enqueue("Pratik");
queue.enqueue("Harsh");

console.log(queue);

console.log(queue.dequeue()); // Sankalp
console.log(queue.dequeue()); // Sahil

console.log(queue);
