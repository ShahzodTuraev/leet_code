// 2315. Count Asterisks
function countAsterisks(s) {
  let count = 0;
  let group = false;
  for (let char of s) {
    if (char === "|") {
      group = !group;
    } else if (char === "*" && !group) {
      count++;
    }
  }
  return count;
}

console.log(countAsterisks("l|*e*et|c**o|*de|"));
