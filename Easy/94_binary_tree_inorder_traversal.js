class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var inorderTraversal = function(root) {
    if(!root) return [];

    let result = [];
    let stack = [];

    
    while(stack.length != 0 || root != null){
        while(root !== null){
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        result.push(root.val);
        root = root.right;

    }

    return result;
};

let a_node = new Node(1);
let b_node = new Node(2);
let c_node = new Node(3);

a_node.right = b_node;
b_node.left = c_node;

console.log(inorderTraversal(a_node));