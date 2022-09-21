class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right);
    }
}

var insertIntoBST = function(root, val) {

    var recursiveHelper = function(root, val){
        if(root == null) return new Node(val);

        if(val < root.val){
            root.left = recursiveHelper(root.left, val);
        }else{
            root.right = recursiveHelper(root.right, val);
        }

        return root;
    }

    return recursiveHelper(root, val);
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

var val = 5;

console.log(insertIntoBST(n1, val))

//Time Complexity: O(log(n))
//Space Complexity: O(log(n))