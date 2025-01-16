// 2828. Check if a String Is an Acronym of Words
function isAcronym(words, s) {
  if (words.length == s.length) {
    let i = 0;
    while (i < s.length) {
      if (s[i] == words[i][0]) {
        i++;
      } else {
        break;
      }
    }
    return i == s.length;
  } else {
    return false;
  }
}
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
