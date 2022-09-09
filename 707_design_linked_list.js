class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList{
    constructor(head = null, length){
        this.head = head;
        this.length = length;
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
    
    add(newElement){
        var currNode = this.head;
        var newNode = new Node(newElement);

        while(currNode.next){
            currNode = currNode.next;
        }

        currNode.next = newNode; 

        this.length++;
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

        return currentNode.val;
    }

    addAtHead(newElement){
        let newNode = new Node(newElement);

        if(this.head){
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++
        return this.head;
    }

    addAtTail(val){

    this.add(val);
    
    }

    addAtIndex(index, val){
        if(this.length === 0) return;

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
        let tempIndex = 0;
        if(this.length === 0) return;

        if(!this.head) return null;

        let currentNode = this.head;

        while(currentNode.next){
            if(tempIndex == index){
                currentNode.val = currentNode.next.val;
                currentNode.next = currentNode.next.next;
            }
            tempIndex++;
            currentNode = currentNode.next;
        }

        return currentNode;
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

var listExample = new MyLinkedList(node1, 5);
// console.log('listExample :', listExample);
// console.log('listExample :', listExample.size());
// listExample.add(1)
// listExample.add(2)
// listExample.add(3)
// listExample.add(4)
// listExample.add(5)
console.log('addAtHead: ' + listExample.addAtHead(1));
console.log('addAtTail: ' + listExample.addAtTail(3));
console.log('addAtIndex' + listExample.addAtIndex(1,2));
console.log('get: ' + listExample.get(1));
console.log('deleteAtIndex: ' + listExample.deleteAtIndex(1));
console.log('get: ' , listExample.get(1));
// console.log('listExample :', listExample.size());
// console.log(listExample.addAtTail(9));
// console.log('listExample :', listExample);
// console.log('listExample :', listExample.size());
// console.log(listExample.addAtIndex(3,5));
// console.log('listExample :', listExample.size());
// console.log(listExample.deleteAtIndex(2));
// console.log('listExample :', listExample.size());
// console.log(listExample.find(9));