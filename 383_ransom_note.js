var canConstruct = function(ransomNote, magazine) {
    let hashMap = {};
    magazine.split('').forEach(x=>{
        !hashMap[x] ? hashMap[x] = 1 :  hashMap[x]++;
    })
    
    let arr = ransomNote.split('');
    // console.log('hashMap :', hashMap);
    // console.log('arr :', arr);
    
    arr.forEach((y,i) =>{
        // console.log('arr :', arr);
        if(hashMap[y]){
            // console.log('i :', i);
            console.log('hashMap :', hashMap);
            arr = arr.splice(i,1);
            hashMap[y]--;
        } 
    })
    
    return arr.length == 0 ? true : false
    
};

// let ransomNote = "a", magazine = "b"; //false
// let ransomNote = "aa", magazine = "ab"; //false
// let ransomNote = "aa", magazine = "aab"; //true
let ransomNote = "fihjjjjei", magazine = "hjibagacbhadfaefdjaeaebgi"; //false

console.log(canConstruct(ransomNote,magazine))