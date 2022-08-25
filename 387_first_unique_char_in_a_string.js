var firstUniqChar = function(s) {
    let hasMap = {};
    let finalIndex = -1;
    s.split('').forEach(char => {
        if(!hasMap[char]){
            hasMap[char] = {'val': 1};
        }else{
            hasMap[char].val++;
        }
    })
    
    Object.values(hasMap).forEach((x,i) => {
        if(x.val == 1 && finalIndex == -1){
            let tempLetter = Object.keys(hasMap)[i];
            return finalIndex = s.split('').indexOf(tempLetter)
        }
    });
    return finalIndex;

};

// var s = 'leetcode'; //0
var s = 'loveleetcode'; //2
// var s = 'aabb'; //-1
// var s = 'aadadaad'; //-1

console.log(firstUniqChar(s));