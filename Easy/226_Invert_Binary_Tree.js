class Node {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

var invertTree = function(root) {

    if(!root) return null;

    let tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;

    invertTree(root.left);
    invertTree(root.right);

    return root;

};

let a_node = new Node(2);
let b_node = new Node(1);
let c_node = new Node(3);

// let d_node = new Node(15);
// let e_node = new Node(7);

a_node.left = b_node;
a_node.right = c_node;
// c_node.left = d_node;
// c_node.right = e_node;

console.log('invertTree(a_node); :', invertTree(a_node));

// Time Complexity : O(n)
// Space Complexity: O(n)