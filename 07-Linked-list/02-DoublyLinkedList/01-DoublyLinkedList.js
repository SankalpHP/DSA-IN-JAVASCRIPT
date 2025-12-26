/**
 * Node class
 * Represents a single element in the Doubly Linked List
 */
class Node {
    constructor(val) {
        this.val = val;      // Value stored in the node
        this.next = null;    // Pointer to next node
        this.prev = null;    // Pointer to previous node
    }
}

/**
 * Doubly Linked List Data Structure
 * Each node has references to both next and previous nodes
 */
class DoublyLinkedList {

    constructor() {
        this.head = null;    // First node in the list
        this.tail = null;    // Last node in the list
        this.length = 0;     // Total number of nodes
    }

    /**
     * push(val)
     * Adds a new node to the end of the list
     */
    push(val) {
        let newNode = new Node(val);

        // If list is empty
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } 
        // Otherwise attach node after tail
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    /**
     * pop()
     * Removes the last node from the list
     */
    pop() {
        if (!this.head) return undefined;

        let popNode = this.tail;

        // If only one node exists
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } 
        // More than one node
        else {
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }

        this.length--;
        return popNode;
    }

    /**
     * shift()
     * Removes the first node from the list
     */
    shift() {
        if (this.length === 0) return undefined;

        // If only one node, reuse pop()
        if (this.length === 1) return this.pop();

        let oldHead = this.head;
        this.head = oldHead.next;

        this.head.prev = null;
        oldHead.next = null;

        this.length--;
        return oldHead;
    }

    /**
     * unshift(val)
     * Adds a new node at the beginning of the list
     */
    unshift(val) {
        if (this.length === 0) return this.push(val);

        let newNode = new Node(val);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    /**
     * get(index)
     * Retrieves a node at a specific index
     * Optimized using head/tail traversal
     */
    get(index) {

        // Invalid index check
        if (index < 0 || index >= this.length) return null;

        let midIndex = Math.floor(this.length / 2);
        let current, counter;

        // Traverse from head if index is in first half
        if (index <= midIndex) {
            current = this.head;
            counter = 0;

            while (counter !== index) {
                current = current.next;
                counter++;
            }
        }
        // Traverse from tail if index is in second half
        else {
            current = this.tail;
            counter = this.length - 1;

            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    /**
     * set(index, value)
     * Updates the value of a node at a given index
     */
    set(index, value) {
        let foundNode = this.get(index);
        if (!foundNode) return false;

        foundNode.val = value;
        return true;
    }

    /**
     * insert(index, value)
     * Inserts a new node at a specific index
     */
    insert(index, value) {

        if (index < 0 || index > this.length) return null;

        // Insert at end
        if (index === this.length) {
            this.push(value);
            return true;
        }

        // Insert at beginning
        if (index === 0) {
            this.unshift(value);
            return true;
        }

        let currentNode = this.get(index);
        let newNode = new Node(value);

        // Rewire pointers
        newNode.next = currentNode;
        newNode.prev = currentNode.prev;

        currentNode.prev.next = newNode;
        currentNode.prev = newNode;

        this.length++;
        return true;
    }

    /**
     * remove(index)
     * Removes a node from a specific index
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        // Remove head
        if (index === 0) return this.shift();

        // Remove tail
        if (index === this.length - 1) return this.pop();

        let removeNode = this.get(index);

        // Reconnect neighboring nodes
        removeNode.next.prev = removeNode.prev;
        removeNode.prev.next = removeNode.next;

        // Detach removed node
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }

    /**
     * print()
     * Traverses and logs the entire list
     * Helpful for debugging
     */
    print() {
        let current = this.head;
        while (current) {
            console.log("List Item => ", current);
            current = current.next;
        }
    }
}

let list = new DoublyLinkedList();
list.push(1); // 0
list.push(2); // 1
list.push(3); // 2
list.push(4); // 3   

list.print();

console.log("--------------------------------");
console.log(list.remove(2));
console.log("--------------------------------");

list.print();








