// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

function isPowerOfTwo(n: number): boolean {
  return n !== 0 ? Math.log2(n) == Math.floor(Math.log2(n)) : false;
}

// console.log(isPowerOfTwo(268435456));
console.log(isPowerOfTwo(0));
