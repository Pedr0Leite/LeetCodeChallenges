var twoSum = function(nums, target) {
    let targetIndex = [];

    nums.forEach((val, i)=> {
        let tempArr = nums.map(x => val + x);
        let value = tempArr.reduce((prev,curr,currIndex) =>{
            if(curr == target && currIndex != i){
                prev.push(currIndex)
            }
            return prev
        }, [])
        
        if(value != '' && i != value[0] && targetIndex == ''){
            targetIndex.push(i, value[0])
            return;
        }

    })

    return targetIndex;
    
};