function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (const price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }
  return maxProfit;
}

console.log(maxProfit([7, 6, 5, 4]));
