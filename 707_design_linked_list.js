class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        // this.prev = prev;
    }
}

class MyLinkedList{
    constructor(head = null){
        this.head = head;
        // this.head = new Node();
        // this.tail = new Node();
        this.length = 0;
        // this.head.next = this.tail;
        // this.tail.prev = this.head;
    }

    size(){
        return this.length;
    }

    
    find(element){
        var currNode = this.head;

        while(currNode.val != element){
            currNode = currNode.next;
        }
        
        return currNode;
        
    }
    
    add(newElement, element){
        var newNode = new Node(newElement);
        var current = this.find(element);

        newNode.next = current.next;
        current = newNode;

        this.length++;

        // var node = new Node();
        
        // if(this.head === null){
        //     this.head = node;
        // }else{
        //     var currentNode = this.head;

        //     while(currentNode.next){
        //         currentNode = currentNode.next;
        //     }

        //     currentNode.next = node;
        // }
        // this.length++;
    }

    get(index){
        var tempIndex = 0;
        let currentNode = this.head;
        
        if(index < 0 || index >= this.length){
            return -1;
        }
        
        while(tempIndex != index){
            currentNode = currentNode.next;
            tempIndex++;
        }

        return currentNode;
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


let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(3);
node2.next = node3;
let node4 = new Node(4);
node3.next = node4;
let node5 = new Node(5);
node4.next = node5;

var listExample = new MyLinkedList(node1);
console.log('listExample :', listExample);
// listExample.add(1)
// listExample.add(2)
// listExample.add(3)
// listExample.add(4)
// listExample.add(5)
// console.log(listExample.addAtHead(7));
// console.log('listExample :', listExample.size());
// console.log(listExample.addAtTail(9));
// console.log('listExample :', listExample.size());
// console.log(listExample.addAtIndex(3,5));
// console.log('listExample :', listExample.size());
// console.log(listExample.deleteAtIndex(2));
// console.log('listExample :', listExample.size());
// console.log(listExample.find(2));
// console.log(listExample.get(2));