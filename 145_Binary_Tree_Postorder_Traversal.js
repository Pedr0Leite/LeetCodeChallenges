class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var postorderTraversal = function(root) {
    if(!root) return [];

    let res = [];
    let stack = [];
    
    stack.push(root);
    while(stack.length !== 0){
        let cur = stack.pop();
        
        res.push(cur.val);
        if(cur.left) stack.push(cur.left);
        if(cur.right) stack.push(cur.right);
    }

    return res.reverse();
    
};

let a_node = new Node(1);
let b_node = new Node(2);
let c_node = new Node(3);

a_node.right = b_node;
b_node.left = c_node;

// console.log('a_node :', a_node);
console.log('postorderTraversal :', postorderTraversal(a_node));
// Time: O(n)
// Space: O(h)