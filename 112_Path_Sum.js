class Node {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }


var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    if(root.val === targetSum && (root.left === null && root.right === null)) return true;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

let a_node = new Node(1);
let b_node = new Node(2);
// let c_node = new Node(3);

a_node.left = b_node;
// a_node.right = c_node;

// console.log('a_node :', a_node);
console.log(hasPathSum(a_node))