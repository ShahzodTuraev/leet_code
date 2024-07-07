// 1518. Water Bottles
function numWaterBottles(numBottles, numExchange) {
  let sum = numBottles;
  let newBottles = numBottles;
  let remain = 0;
  do {
    sum += Math.floor(newBottles / numExchange);
    remain = newBottles % numExchange;
    newBottles = Math.floor(newBottles / numExchange) + remain;
    remain = 0;
  } while (newBottles / numExchange >= 1);
  return sum;
}

console.log(numWaterBottles(27, 4));
