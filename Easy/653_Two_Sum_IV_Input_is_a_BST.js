class Node {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

var findTarget = function(root, k) {
    let set = new Set();

    function recursiveHelper(root){
        if(!root) return false;

        if(set.has(k - root.val)){
            return true;
        }

        set.add(root.val);

        return recursiveHelper(root.left) || recursiveHelper(root.right);

    }

    return recursiveHelper(root);
    
};

let n1 = new Node(5);
let n2 = new Node(3);
let n3 = new Node(6);
let n4 = new Node(2);
let n5 = new Node(4);
let n6 = new Node(7);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.right = n6;

console.log(findTarget(n1, 9))

// Time: O(n)
// Space: O(h)