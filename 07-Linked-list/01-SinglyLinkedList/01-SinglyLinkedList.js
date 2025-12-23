/**
 *   Singly Linked List Data Structure
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Bad way to push a code in a singlylinkedlist
let firstNode = new Node("Hii");
    firstNode.next = new Node("There");
    firstNode.next.next = new Node("Good");
    firstNode.next.next.next = new Node("Morning");

    console.log(firstNode);
    
