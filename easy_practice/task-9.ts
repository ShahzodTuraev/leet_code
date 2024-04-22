// 20. Valid Parentheses

function isValid(s: string): boolean {
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") res.push(")");
    else if (s[i] === "[") res.push("]");
    else if (s[i] === "{") res.push("}");
    else if (res.pop() !== s[i]) return false;
  }
  return !res.length;
}

console.log(isValid("{}[]({(){}})"));
