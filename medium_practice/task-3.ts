// 3075. Maximize Happiness of Selected Children
function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let sum: number = 0;
  let decrement: number = 0;

  for (let i: number = 0; i < k; i++) {
    happiness;
    sum += Math.max(happiness[i] - decrement, 0);
    decrement++;
  }
  return sum;
}
console.log(maximumHappinessSum([2, 3, 4, 5, 6], 2));
