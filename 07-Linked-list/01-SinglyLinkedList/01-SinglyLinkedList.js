/**
 *   Singly Linked List Data Structure
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
       let newNode = new Node(val);

       if(!this.head){
          this.head = newNode;
          this.tail = newNode;
       }else{
          this.tail.next = newNode;
          this.tail = newNode;
       }
       this.length++;

       return this;
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current
    }   

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        if(index === 0) return this.head;

        let current = this.head;
        let counter = 1;
        while(current){
            current = current.next;
            if(counter === index){
               return current;
            }
            counter++;
        }
    }

    set(index,value){
        let foundNode = this.get(index);

        if(!foundNode) return false;

        foundNode.val = value;
        return true
    }

    insert(index,val){

        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        if(index === this.length){
            this.push(val);
            return true;
        }

        let foundNode = this.get(index-1);

        let newNode = new Node(val);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index){

        if(index < 0 || index >= this.length) return null;

        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let foundNode = this.get(index-1);
        let removeNode = foundNode.next;
        foundNode.next = foundNode.next.next;
        this.length--;
        return removeNode;
    }

    reverse(){
        let curr = this.head;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;

            if(i === this.length - 1){
                let tempNode = this.head;
                this.head = this.tail;
                this.tail = tempNode
            }
        }
        return this;
    }
}

let list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    console.log(list.reverse());
    
    let current = list.head;
    while(current){
        console.log("current => ", current);
        current = current.next;
    }

    
    

    

    
    
    

    
