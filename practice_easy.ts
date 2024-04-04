// Practice 1
// Given a string s consisting of words and spaces, return the length of the last word in the string
// A word is a maximal substring consisting of non-space characters only.

// function lengthOfLastWord(s: string): number {
//   let filteredArr: any = s.split(" ").filter((ele: string) => ele !== "");
//   return filteredArr[filteredArr.length - 1].length;
// }

// Practice 2
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
  let a: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        a.push(nums[i]);
      }
    }
  }
  let last = a.length % 2 == 1 ? a.filter((ele) => ele * 2 !== target) : a;
  return last.map((ele: number) => {
    return nums.indexOf(ele);
  });
}
