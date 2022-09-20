class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var isValidBST = function(root) {

    function recursiveInside(root, min, max){

        if(!root) return true; //it means it reached the end without any issues
        
        if(root.val <= min || root.val >= max){ 
            return false
        };
        
        return recursiveInside(root.left, min, root.val) && recursiveInside(root.right, root.val, max);
    }

    //Infinity because -2^31 <= Node.val <= 2^31 - 1
    return recursiveInside(root, -Infinity, Infinity);

};

let a_node = new Node(2);
let b_node = new Node(1);
let c_node = new Node(3);

a_node.right = c_node;
a_node.left = b_node;

console.log(isValidBST(a_node));

// let root = [2,1,3]; //true
// let root = [5,1,4,null,null,3,6] // false


// Time: O(n)O(n)
// Space: O(h)O(h)