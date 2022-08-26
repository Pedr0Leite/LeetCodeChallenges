//Easy

//time complexity = O(N)
//space complexity = O(N)

var isValid = function(s) {
const hashMap = {'(': ')', '{':'}', '[':']'};
let stack = [];

for(let char of s){
    if(hashMap[char]){
        //char is an opening bracket
        stack.push(hashMap[char]);
    }else if(stack.length > 0 && stack[stack.length - 1] == char){
        // char is a closing bracket and top of stach matches
        stack.pop();
    } else{
        // char is a closing bracket and top of the stack doesn't match
        return false
    }
}



return stack.length == 0 ? true : false;
    
};

let s = '([]){}';
console.log('isValid :', isValid(s));