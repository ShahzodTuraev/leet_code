// 1190. Reverse Substrings Between Each Pair of Parentheses
function reverseParentheses(s) {
  s.includes("()");
  const indexFinder = (sign) => {
    const indexArr = s
      .split("")
      .map((ele, index) => (ele == sign ? index : ele))
      .filter((ele) => Number.isInteger(ele));
    return sign == "(" ? indexArr.reverse() : indexArr;
  };
  const openBrcIndexes = indexFinder("(");
  const closeBrcIndexes = indexFinder(")");
  let text = s.split("");

  for (let i = 0; i <= openBrcIndexes.length; i++) {
    text = text.map((ele, index, array) => {
      if (index > openBrcIndexes[i] && index < closeBrcIndexes[i]) {
        return array[closeBrcIndexes[i] + openBrcIndexes[i] - index];
      } else {
        return ele;
      }
    });
  }
  return text.filter((ele) => !["(", ")"].includes(ele)).join("");
}

console.log(reverseParentheses("(db)(as)"));
