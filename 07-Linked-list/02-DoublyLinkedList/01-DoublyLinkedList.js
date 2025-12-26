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

    shift(){
        if(this.length === 0) return undefined;
        if(this.length === 1) return this.pop();
        let oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;
        this.head.prev = null;
        this.length--;
        return oldHead;
    }

    unshift(val){
        if(this.length === 0) return this.push(val);
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
        this.length++;
        return this;
    }
    
    get(index) {

        if(this.length === 0) return null;

        // Invalid index check (covers empty list as well)
        if (index < 0 || index >= this.length) return null;

        let midIndex = Math.floor(this.length / 2);
        let current, counter;

        // If index is in the first half → traverse from head
        if (index <= midIndex) {
            current = this.head;
            counter = 0;

            while (counter !== index) {
                current = current.next;
                counter++;
            }
        }
        // If index is in the second half → traverse from tail
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

    set(index,value){
        let foundNode = this.get(index);
        if(!foundNode) return false;
        foundNode.val = value;
        return true;
    }


    print(){
        let current = this.head;
        while(current){
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
list.push(5); // 4
list.push(6); // 5

console.log(list.set(6,7));






