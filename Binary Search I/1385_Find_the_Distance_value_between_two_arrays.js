var findTheDistanceValue = function (arr1, arr2, d) {
  let val = 0;

  for (var i = 0; i < arr1.length; i++) {
    let flag = true;

    for (var j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        flag = false;
        // break;
      }
    }
    if (flag) val++;
  }
  console.log("val :", val);
  return val;

};

var arr1 = [1, 4, 2, 3], arr2 = [-4, -3, 6, 10, 20, 30], d = 3; //2
// var arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2; //2
// var arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6 //1

findTheDistanceValue(arr1, arr2, d);
