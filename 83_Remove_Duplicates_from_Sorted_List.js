class Node {
    constructor(val, next){
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

class MyLinkedList{
    constructor(head = null, length){
        this.head = head;
        this.length = length
    }

    removeDuplicates(){
        var currNode = this.head;

        if(currNode == null || currNode.next == null) return currNode;

        while(currNode && !(currNode.next === null)){
            if(currNode.val == currNode.next.val){
                currNode.next = currNode.next.next;
            }else{
                currNode = currNode.next;
            }
        }
        return this.head;
    }
}

var head = [1,1,2];

let node1 = new Node(1);
let node2 = new Node(1);
node1.next = node2;
let node3 = new Node(2);
node2.next = node3;

var listExample = new MyLinkedList(node1, 3);
// console.log(listExample.head)
// console.log(listExample.length)
// console.log(listExample.removeDuplicates())
// console.log(listExample.head)
// console.log(listExample.length)

var deleteDuplicates = function(head) {

    let newList = new MyLinkedList(head);
    return newList.removeDuplicates();
    
};
console.log('deleteDuplicates :', deleteDuplicates(node1));
