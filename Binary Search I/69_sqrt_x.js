var mySqrt = function(x) {
var lo = 0;
var hi = x;

while(lo <= hi){
    var mid = Math.floor((lo + hi) / 2);
    if(mid * mid > x){
        hi = mid - 1;
    }else{
        lo = mid + 1;
    }
}
return hi;

};

// var x = 4; //2
// var x = 8; //2 (2.82 -> 2)
mySqrt(x);