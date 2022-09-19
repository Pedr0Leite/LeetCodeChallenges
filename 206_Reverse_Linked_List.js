class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class MyLinkedList {
    constructor(head = null, length) {
        this.head = head;
        this.length = length
    }

}

var reverseList = function (head) {
    if(!head || !head.next){
        return head;
    }

    let temp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return temp;
};

var head = [1, 2, 3, 4, 5];


let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(3);
node2.next = node3;
let node4 = new Node(4);
node3.next = node4;
let node5 = new Node(5);
node4.next = node5;


console.log('reverseList :', reverseList(node1));