/**
 * STACK IMPLEMENTATION USING SINGLY LINKED LIST
 * 
 * Stack follows LIFO (Last In, First Out)
 * All operations run in O(1) time
 */

// Node represents a single element in the stack
class Node {
    constructor(val) {
        this.val = val;      // Value stored in the node
        this.next = null;    // Pointer to the next node
    }
}

// Stack class using a Singly Linked List
class Stack {
    constructor() {
        this.first = null;   // Top of the stack
        this.last = null;    // Bottom of the stack
        this.size = 0;       // Number of elements
    }

    /**
     * push(val)
     * Adds a new value to the top of the stack
     * Time Complexity: O(1)
     */
    push(val) {
        let newNode = new Node(val);

        // If stack is empty
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } 
        // Stack has elements
        else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        // Increase size and return updated size
        return ++this.size;
    }

    /**
     * pop()
     * Removes and returns the value from the top of the stack
     * Time Complexity: O(1)
     */
    pop() {
        if (this.size === 0) return null;

        let removeNode = this.first;

        // If only one element exists
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } 
        // More than one element
        else {
            this.first = removeNode.next;
            removeNode.next = null;
        }

        this.size--;
        return removeNode.val;
    }
}

// Testing the stack
let stack = new Stack();

console.log(stack.push(1)); // 1
console.log(stack.pop());   // 1
console.log(stack);         // Empty stack
