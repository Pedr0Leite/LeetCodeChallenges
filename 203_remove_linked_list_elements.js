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

}

var myLinkedList = new MyLinkedList(head);

var removeElements = function(head, val) {
    var node = head;
    var prev = null;
    
    if(head == null){
        return head;
    }

    if(head.val === val){
        return removeElements(head.next, val)
    }

    while(node){
        if(node.val === val){
            prev.next = node.next;
            node = prev.next;
        }else{
            prev = node;
            node = node.next;
        }
    }


    return head;
};

var head = [1,2,6,3,4,5,6], val = 6 // Output: [1,2,3,4,5]

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(6);
node2.next = node3;
let node4 = new Node(3);
node3.next = node4;
let node5 = new Node(4);
node4.next = node5;
let node6 = new Node(5);
node5.next = node6;
let node7 = new Node(6);
node6.next = node7;

console.log(removeElements(node1, val));

//Time complexity -> O(n)
//Space complexity -> O(1) (linear)