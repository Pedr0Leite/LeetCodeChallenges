class Node {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

var searchBST = function(root, val) {
    if(!root) return null;
    
    if(root.val == val){return root}
    
    return searchBST(root.left, val) || searchBST(root.right, val);
    
};

let n1 = new Node(4);
let n2 = new Node(2);
let n3 = new Node(7);
let n4 = new Node(1);
let n5 = new Node(3);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(searchBST(n1, 2))