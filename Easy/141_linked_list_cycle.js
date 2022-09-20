/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

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

}

let head = [3,2,0,-4], pos = 1;

let node1 = new Node(3);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(0);
node2.next = node3;
let node4 = new Node(-4);
node3.next = node4;
node4.next = node2;

var linkedList = new MyLinkedList(node1, 4);

var hasCycle = function(head) {
        
    let fast = head;
    let slow = head;
    
    while(fast && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
        console.log('fast === slow :', fast === slow);
    }
    return false;
    
};

console.log('hasCycle :', hasCycle(linkedList.head));