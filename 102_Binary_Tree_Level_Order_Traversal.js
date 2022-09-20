class Node {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

var levelOrder = function(root) {
   if(!root) return [];

    let res = [];
    let stack = [];
    
    stack.push(root);
    
    while(stack.length !== 0){
        let size = stack.length;
        let tempLevel = [];
        
        while(size--){
            let cur = stack.shift();
            tempLevel.push(cur.val);
            
            if (cur.left) stack.push(cur.left);
            if (cur.right) stack.push(cur.right);
        }
        
        console.log('tempLevel :', tempLevel);
        res.push(tempLevel.concat())
        
    }
    console.log('res :', res);
    return res;
};

// let a_node = new Node(3);
// let b_node = new Node(9);
// let c_node = new Node(20);
// let d_node = new Node(15);
// let e_node = new Node(7);
// a_node.left = b_node;
// a_node.right = c_node;
// c_node.left = d_node;
// c_node.right = e_node;


let a_node = new Node(1);
let b_node = new Node(2);
let c_node = new Node(3);
let d_node = new Node(4);
let e_node = new Node(5);

a_node.left = b_node;
a_node.right = c_node;

b_node.left = d_node;

c_node.right = e_node;

levelOrder(a_node)

// Time Complexity : O(n)
// Space Complexity: O(n)