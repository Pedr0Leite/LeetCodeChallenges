class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var insertIntoBST = function(root, val) {
    
};


// let a_node = new Node(1);
// let b_node = new Node(5);
// let c_node = new Node(6);

// a_node.right = b_node;
// b_node.right = c_node;