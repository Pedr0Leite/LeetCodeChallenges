class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

// var preorderTraversal = function (root, res = []) { //solution 1
var preorderTraversal = function (root) { //solution 2
    //One Solution
    // if(!root) return [];
    // res.push(root.val);
    // preorderTraversal(root.left, res);
    // preorderTraversal(root.right, res);
    // return res;
    
    //Second Solution
    if(!root) return [];

    let stack = [];
    let result = [];

    stack.push(root);

    while(stack.length){
        let currentNode = stack.pop();
        result.push(currentNode.val);
        if(currentNode.right) stack.push(currentNode.right)
        if(currentNode.left) stack.push(currentNode.left)

    }
    return result;
};

let a_node = new Node(1);
let b_node = new Node(5);
let c_node = new Node(6);

a_node.right = b_node;
b_node.right = c_node;

console.log(preorderTraversal(a_node));