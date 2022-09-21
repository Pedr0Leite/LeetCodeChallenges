class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

var lowestCommonAncestor = function(root, p, q) {
    
};

let n1 = new Node(6);

let n2 = new Node(2);
let n3 = new Node(8);

let n4 = new Node(0);
let n5 = new Node(4);

let n6 = new Node(7);
let n7 = new Node(9);

let n8 = new Node(3);
let n9 = new Node(5);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.left = n6;
n3.right = n7;

n5.left = n8;
n5.right = n9;

var p = 2, q = 8; //output 6