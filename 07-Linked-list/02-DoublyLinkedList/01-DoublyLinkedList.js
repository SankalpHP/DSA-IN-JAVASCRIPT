/**
 *   Doubly Linked List
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined
        let popNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popNode.prev;
            this.tail.next  = null;
            popNode.prev = null;
        }
        this.length--;
        return popNode;
    }

    print(){
        let current = list.head;
        while(current){
            console.log("List Item => ", current);
            current = current.next;
        }
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

list.print();

console.log("pop => ", list.pop());

list.print();


