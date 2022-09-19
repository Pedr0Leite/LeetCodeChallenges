var searchMatrix = function(matrix, target) {

    for(let i = 0; i < matrix.length; i++){ //O(n)
        let answer = matrix[i].includes(target)
        if(answer == true){
            return true;
        }
    }
    return false; 
};


let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3; //true
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13; //false

console.log(searchMatrix(matrix, target));


//Time complexity -> mxn -> O(m * n) -> two loops on all the extension of arrays?
//Space complexity -> m x n -> O(n) -> the length of the array * the lenght of each sub arrays ?