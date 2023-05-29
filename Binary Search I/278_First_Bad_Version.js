var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right){
            let mid = left + Math.floor((right - left) / 2);
            if(isBadVersion(mid)){
               right = mid;
            } 
            else left = mid + 1;
        }

        return left;
    };
};

let n = 5, bad = 4; //4
// let n = 1, bad = 1; //1