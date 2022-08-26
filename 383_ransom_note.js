
var canConstruct = function(ransomNote, magazine) {
    let hashMap = {};
    magazine.split('').forEach(x=>{
        !hashMap[x] ? hashMap[x] = 1 :  hashMap[x]++;
    })
    
    let arr = ransomNote.split('');
    
    ransomNote.split('').forEach((y,i) =>{
        if(hashMap[y]){
            arr.splice(arr.indexOf(y),1);
            hashMap[y]--;
        } 
    })

    return arr.length > 0 ? false : true
    
};

let ransomNote = "fihjjjjei", magazine = "hjibagacbhadfaefdjaeaebgi";

//O(n*array size + n*ransomenote Size) -> O(n + n) -> O(n)
//time complexity = O(n), where n is the length of the string to array input
//Space complexity = O(1)

// console.log(canConstruct(ransomNote, magazine))