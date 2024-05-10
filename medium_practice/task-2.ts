let numRescueBoats = function (people: number[], limit: number): number {
  let count: number = 0,
    i: number = 0,
    j: number = people.length - 1;
  people.sort(function (a, b) {
    return a - b;
  });
  console.log(people, "people-after sort");
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      count++;
      i++;
      j--;
    } else {
      count++;
      j--;
    }
  }
  return count;
};
