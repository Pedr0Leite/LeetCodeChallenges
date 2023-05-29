var twoSum = function (numbers, target) {
let left = 0;
let right = numbers.length - 1;

while(left < right){
    const cur = numbers[left] + numbers[right];
    if(cur == target){
        return [left + 1, right + 1]
    }

    cur > target ? right-- : left++;
}

};

let numbers = [2, 7, 11, 15],
  target = 9; //[1,2]
// let numbers = [0,0,3,4], target = 0; //[1,2]
twoSum(numbers, target);
