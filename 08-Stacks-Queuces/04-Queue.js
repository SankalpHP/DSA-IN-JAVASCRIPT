/**
 *   Create a queue using linkedlist
 */

class Node{
    constructor(val){
        this.val = val,
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null,
        this.last = null,
        this.size = 0
    }

    enqueue(val){

        let newNode = new Node(val);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}

let queue = new Queue();
queue.enqueue("Sankalp");
queue.enqueue("Sahil");
queue.enqueue("Pratik");
queue.enqueue("Harsh");
console.log(queue);
