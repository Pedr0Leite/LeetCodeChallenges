var peakIndexInMountainArray = function(arr) {
    let low = 1;
    let high = arr.length - 2;
    
    while(low < high){
        let pivot = Math.floor(low + ((high - low) / 2));
                
        if(arr[pivot] < arr[pivot + 1]){
            low = pivot + 1
        }else{
            high = pivot;
        }
    }

    return low;
};

// var arr = [0,10,5,2]; //1
var arr = [3,4,5,1]; //2

console.log(peakIndexInMountainArray(arr));