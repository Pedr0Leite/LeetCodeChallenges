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

 var hasCycle = function(head) {

    let fast = head;
    let slow = head;

    while(head && head.next){
        fast = head.next.next;
        slow = head.next;
        if(fast === slow) return true;
    }
    return false;
    
};