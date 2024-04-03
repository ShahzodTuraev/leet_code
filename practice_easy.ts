// Practice 1
// Given a string s consisting of words and spaces, return the length of the last word in the string
// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s: string): number {
  let filteredArr: any = s.split(" ").filter((ele: string) => ele !== "");
  return filteredArr[filteredArr.length - 1].length;
}
