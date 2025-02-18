// 2828. Check if a String Is an Acronym of Words
function isAcronym(words, s) {
  return words.map((ele) => ele[0]).join("") === s;
}

console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
