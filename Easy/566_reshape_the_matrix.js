var matrixReshape = function(mat, r, c) {

    let flatArr = mat.flat(); //O(n) -> first recursion

    let arr = [];
    let matR = mat.length;
    let matC = mat[0].length;

    if(r * c != matR * matC){
        return mat;
    }


   for(let i = 0; i < r; i++){
       let tempArr = [];
       
   for(let j = 0; j < r; j+=r){
           let valuesForC = flatArr.splice(j, c);
           tempArr.push(valuesForC)
       }
       arr.push(tempArr.flat())
   }
   return arr;
};

// var mat = [[1,2],[3,4]]; //[[1,2,3,4]]
var mat = [1,2,3,4]; 
// const r = 1, c = 4;//[[1,2,3,4]]
// const r = 2, c = 4; //[[1,2],[3,4]]
const r = 4, c = 1;//[[1],[2],[3],[4]]

console.log(matrixReshape(mat,r,c))

//time complexity = O(n^2); -> n + n*n + n -> O(2n + n^2) -> O(n^2)
//Space complexity = O(n)