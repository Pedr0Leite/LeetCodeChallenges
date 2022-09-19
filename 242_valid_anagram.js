var isAnagram = function(s, t) {
    let hashMap = {};

    if(s.length != t.length){
        return false;
    }

    s.split('').forEach(x=>{
        !hashMap[x] ? hashMap[x] = 1 :  hashMap[x]++;
    })
    t.split('').forEach(y=>{
        hashMap[y] ? hashMap[y]-- : 0;
    })
    
    
    return Object.values(hashMap).every(val => val == 0);
    
};

//Time complexity: O(n)
//Space complexity: O(1)

// let s = "anagram", t = "nagaram"; //true
// let s = "rat", t = "car"; //false
let s = "a", t = "ab"; //false

console.log(isAnagram(s,t))