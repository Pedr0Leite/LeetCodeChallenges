//NOT FINISHED

var replaceWords = function(dictionary, sentence) {
    var hashMap = {};
    
    let sentenceArr = sentence.split(' ');
    
    dictionary.forEach((x,i)=> {
        let lengthOfWord = x.length;
        sentenceArr.forEach((y,j) =>{
            let sliced = y.slice(0, lengthOfWord);
            console.log('sliced :', sliced);
            if(sliced == x){
                if(!hashMap[x]){
                    hashMap[x] = {'word':sliced, 'index':j}
                }
            }
        })
    })

    let hasMapValues = Object.values(hashMap);

    hasMapValues.forEach(z => {
        let word = z.word;
        let index = z.index;
        sentenceArr[index] = word;  
    })
    
    return sentenceArr.join(' ');
};



// let dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"; //"the cat was rat by the bat"
let dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs" // "a a b c";

// let dictionary = ["cat","catt","cattl"], sentence = "the cattle was rattled by the battery"; //"the cat was rat by the bat"
console.log(replaceWords(dictionary, sentence));