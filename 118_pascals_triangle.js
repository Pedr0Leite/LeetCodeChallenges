var generate = function (numRows) {
  let arr = [];

  for (let i = 1; i <= numRows; i++) {
    let tempArr = [];

    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        tempArr.push(1);
      } else {
        tempArr.push(arr[i - 2][j - 1] + arr[i - 2][j]);
      }
    }
    arr.push(tempArr);
  }
};

//time complexity -> O(n^2)
//space complexity -> O(n)

let numRows = 5; //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(numRows);
