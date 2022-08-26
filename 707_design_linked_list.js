class Node {
    constructor(val = null, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList{
    constructor(){
        this.head = new Node();
        this.tail = new Node();
        this.length = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(index){
        let currentNode = this.head.next;
       
       if(index < 0 || index >= this.length){
           return -1;
       }
   
        while(index--){
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }

    addAtHead(val){
        let newNode = new Node(val);
        if(this.head){
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++
        return this.head;
    }

    addAtTail(val){
        let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.length++;
        return this.head;
    }

    let tail = this.head;
    while(tail.next != null){
        tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
    }

    addAtIndex(index, val){
        if(this.length == 0) return;

        if(!this.head) return null;
        
        let current = this.head;
        let newNode = new Node(val);

        while(current.next){
            if(current.val == index){
                current.next = newNode;
                newNode.next = null;
            }
            current = current.next;
        }
        return current
    }

    deleteAtIndex(index){
        if(this.length == 0) return;

        if(!this.head) return null;

        let current = this.head;

        while(current.next){
            if(current.val == index){
                current.val = current.next.value;
                current.next = current.next.next;
            }
            current = current.next;
        }

        return current;
    }


}