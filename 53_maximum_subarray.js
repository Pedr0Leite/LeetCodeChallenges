var maxSubArray = function (nums) {

    if (nums.length == 1) {
        return nums[0];
    }

    let maxSum = -Infinity;
    let curr = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        curr = Math.max(0, curr);
        curr += nums[i];
        maxSum = Math.max(maxSum, curr);
    }


    return maxSum;
};

let nums = [-1, -2]; //-1

console.log(maxSubArray(nums));