// 1773. Count Items Matching a Rule
function countMatches(items, ruleKey, ruleValue) {
  const adopter = ["type", "color", "name"];
  const reqIndex = adopter.indexOf(ruleKey);
  let i = 0;
  for (const item of items) {
    if (item[reqIndex] === ruleValue) {
      i++;
    }
  }
  return i;
}
(items = [
  ["phoneh", "blue", "pixel"],
  ["computer", "silver", "phhsone"],
  ["phonfse", "gold", "iphone"],
]),
  (ruleKey = "type"),
  (ruleValue = "phone");
console.log(countMatches(items, ruleKey, ruleValue));
