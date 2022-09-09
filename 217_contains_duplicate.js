var containsDuplicate = function(nums) {
    let hashMap = {};
    for(let numb of nums){
        console.log('numb :', numb);
        if(!hashMap[numb]){
            hashMap[numb] = 1;
        }else{
            hashMap[numb]++;
        }
    }
    return Object.values(hashMap).every(x => x == 1) ? false : true;
};



var nums = [1,2,3,1]; //true

containsDuplicate(nums);