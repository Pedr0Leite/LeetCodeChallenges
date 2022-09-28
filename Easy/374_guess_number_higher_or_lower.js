var guessNumber = function(n) {
    let mid = Math.floor(n / 2);
    let left = 1;
    let right = n;

    while(left <= right){
        if(guess(mid) === 0){
            return mid;
        
        }else if(guess(mid) === 1){
            left = mid + 1;
            mid = Math.floor(left + (right - left) / 2);
            
        }else if(guess(mid) === -1){
            right = mid - 1;
            mid = Math.floor(right + (right - left) / 2);
        }
    }
};

var n = 10, pick = 6; //6
// var n = 1, pick = 1; //1

console.log(guessNumber(n))