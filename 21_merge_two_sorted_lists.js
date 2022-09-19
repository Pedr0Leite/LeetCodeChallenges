class ListNode {
    constructor(val) {
        this.val = (val === undefined ? 0 : val);
        this.next = null;
    }
}

var mergeTwoLists = function (l1, l2) {

    // //Initialize the new List
    // let newList = new ListNode(0);

    // //Reference to the head on the new List
    // let headOfList = newList;

    // if (l1 == '' && l2 == '') {
    //     return [];
    // }

    // while (l1 != null && l2 != null) {

    //     if (l1.val < l2.val) {
    //         newList.next = l1;
    //         l1 = l1.next;

    //     } else {
    //         newList.next = l2;
    //         l2 = l2.next;

    //     }

    //     newList = newList.next;
    // }

    // if (!l1) {
    //     newList.next = l2;
    // }

    // if (!l2) {
    //     newList.next = l1;
    // }

    // return headOfList.next;

    if(!l1) return l2;
    if(!l2) return l1;
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

};

var list1 = [1, 2, 4], list2 = [1, 3, 4]; //[1,1,2,3,4,4]
// var list1 = [], list2 = []; // []
// var list1 = [], list2 = [0] // [0]

// var node1a = new ListNode(1);
// var node2a = new ListNode(2);
// var node3a = new ListNode(4);

// node1a.next = node2a;
// node2a.next = node3a;

// var linkedListA = new MyLinkedList(node1a, 3);

// var node1b = new ListNode(1);
// var node2b = new ListNode(3);
// var node3b = new ListNode(4);

// node1b.next = node2a;
// node2b.next = node3a;



// mergeTwoLists(linkedListA, linkedListB);
console.log(mergeTwoLists(list1, list2));