var nextGreatestLetter = function(letters, target) {
    let targetCode = target.charCodeAt(0);
    let arr = [];
    
    if(letters.indexOf(target) != -1){
        letters.splice(letters.indexOf(target), 1);
    }
    
    letters.forEach(x=>{
    if(targetCode < x.charCodeAt(0)){
            arr.push(x.charCodeAt(0))
        }
    })

return arr.length == 0 ? letters[0] : String.fromCharCode(arr[0]);
};

var letters = ["c","f","j"], target = "j"; //c

nextGreatestLetter(letters, target);