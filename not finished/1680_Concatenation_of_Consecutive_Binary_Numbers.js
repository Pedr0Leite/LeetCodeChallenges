var concatenatedBinary = function(n) {
    
    var arrOfNumbers = [];
    var count = 1;
    
    function dec2bin(number){
        return (number >>> 0).toString(2);
    }
    
    while(count <= n){
        arrOfNumbers.push(count);
        count++
    }    
    arrOfNumbers = arrOfNumbers.map(x => dec2bin(x));
    arrOfNumbers = arrOfNumbers.join('');

    let finalResult = parseInt(arrOfNumbers, 2);

    if(finalResult > 100000){
        return finalResult % Math.pow(10,9) + 7;
    }else{
        return finalResult;
    }
};


// var n = 3; //27
var n = 12; //505379714

console.log(concatenatedBinary(n))