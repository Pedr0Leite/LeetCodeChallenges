class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var isValidBST = function(root) {
    if(!root) return [];
    
    let leftStack = [];
    let rightStack = [];
    
    let currentNode = root;
    
    while(currentNode){
        while(root !== null){
            currentNode = currentNode.right
            if(currentNode.val > currentNode.right){
                return false;
            }
        }
        
        currentNode = currentNode.left;
        if(currentNode.val < currentNode.left){
            return false;
        }
        
    }

    return true;
};

let a_node = new Node(2);
let b_node = new Node(1);
let c_node = new Node(3);

a_node.right = c_node;
a_node.left = b_node;

console.log(isValidBST(a_node));

// let root = [2,1,3]; //true
// let root = [5,1,4,null,null,3,6] // false
