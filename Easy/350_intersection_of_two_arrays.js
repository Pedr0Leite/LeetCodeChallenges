var intersect = function(nums1, nums2) {
    var valuesNums1 = {};
    var finalArr = [];
    
    for(var x of nums1){
        if(!valuesNums1[x]){
            valuesNums1[x] = 1;
        }else{
            valuesNums1[x]++;
        }
    }
    
    for(var y of nums2){
        if(valuesNums1[y] > 0){
            finalArr.push(y)
            valuesNums1[y]--
        }
    }

    return finalArr;
};


// var nums1 = [4,9,5], nums2 = [9,4,9,8,4]; //[4,9] || [9,4]
var nums1 = [1,2,2,1], nums2 = [2,2]; //[4,9] || [9,4]


console.log(intersect(nums1,nums2))