// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  return x.toString().split("").reverse().join("") == x.toString();
}
// console.log(isPalindrome(121));
