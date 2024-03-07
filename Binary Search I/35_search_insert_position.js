var searchInsert = function(nums, target) {
    //If exists, return the index
    if(nums.indexOf(target) != -1){
        return nums.indexOf(target);
    }

    //if it can be squizzed inside the array
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > target){
            return i;
        }   
    }

    //if all numbers are smaller that the target, put it on the end
    return nums.length;

};


// var nums = [1,3,5,6], target = 5; //2
// var nums = [1,3,5,6], target = 2// 1
var nums = [1,3,5,6], target = 7; //4

console.log(searchInsert(nums, target));