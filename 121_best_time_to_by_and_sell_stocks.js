var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    prices.shift(); //we can't use the first element
    prices.forEach(val => {
        const sellPrice = val;
        const profit = sellPrice - min;
        max = Math.max(max, profit);
        min = Math.min(min, val)
    });
return max;
};

var prices = [7, 1, 5, 3, 6, 4] //5
// var prices = [7,6,4,3,1] // 0
// var prices = [2,1,2,1,0,1,2] // 2

// Time Complexity : O(n)
// space Complexity : O(1)

console.log(maxProfit(prices))