/**
 * Singly Linked List Data Structure
 * Each node points only to the next node in the list.
 */

// 🔹 Node class represents a single element in the list
class Node {
    constructor(val) {
        this.val = val;      // Value stored in the node
        this.next = null;    // Pointer to the next node
    }
}

// 🔹 SinglyLinkedList class manages the linked list
class SinglyLinkedList {
    constructor() {
        this.head = null;    // First node of the list
        this.tail = null;    // Last node of the list
        this.length = 0;     // Total number of nodes
    }

    // ✅ Push: Add a node at the end of the list
    push(val) {
        let newNode = new Node(val);

        // If list is empty, head and tail both point to new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Attach new node after tail and update tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // ✅ Pop: Remove the last node from the list
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        // Traverse till the last node
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        // Update tail and detach last node
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        // If list becomes empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // Return removed node
    }

    // ✅ Shift: Remove the first node
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        // If list becomes empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

    // ✅ Unshift: Add a node at the beginning
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // ✅ Get: Retrieve a node by index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    // ✅ Set: Update value of a node at a given index
    set(index, value) {
        let foundNode = this.get(index);

        if (!foundNode) return false;

        foundNode.val = value;
        return true;
    }

    // ✅ Insert: Add a node at a specific index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let prevNode = this.get(index - 1);
        let newNode = new Node(val);

        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
        return true;
    }

    // ✅ Remove: Delete a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;

        prevNode.next = removedNode.next;
        this.length--;

        return removedNode;
    }

    // ✅ Reverse: Reverse the entire linked list in-place
    reverse() {
        let curr = this.head;
        let prev = null;
        let next;

        // Swap head and tail
        this.tail = curr;

        // Reverse pointers
        for (let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Set new head
        this.head = prev;

        return this;
    }
}

// 🔹 Testing the Linked List
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

// Reverse the list
console.log(list.reverse());

// Traverse and print each node
let current = list.head;
while (current) {
    console.log("current => ", current);
    current = current.next;
}
