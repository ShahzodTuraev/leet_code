// function isValid(word) {
//   let uppercaseArr = [];
//   let lowercaseArr = [];
//   let numberArr = [];
//   let vowelArr = [];
//   let consonantArr = [];
//   const vowelLetters = ["a", "e", "i", "o", "u"];
//   function isValid(word: string): boolean {
//     let uppercaseArr: string[] = [];
//     let lowercaseArr: string[] = [];
//     let numberArr: string[] = [];
//     let vowelArr: string[] = [];
//     let consonantArr: string[] = [];
//     const vowelLetters: string[] = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < word.length; i++) {
//       if (Number(word[i]) >= 0) {
//         numberArr.push(word[i]);
//       }
//       if (word[i].toUpperCase() == word[i] && !(Number(word[i]) >= 0)) {
//         uppercaseArr.push(word[i]);
//         if (vowelLetters.includes(word[i].toLowerCase())) {
//           vowelArr.push(word[i]);
//         } else {
//           consonantArr.push(word[i]);
//         }
//       }
//       if (word[i].toLowerCase() == word[i] && !(Number(word[i]) >= 0)) {
//         lowercaseArr.push(word[i]);
//         if (vowelLetters.includes(word[i].toLowerCase())) {
//           vowelArr.push(word[i]);
//         } else {
//           consonantArr.push(word[i]);
//         }
//       }
//     }

//     return (
//       word.length > 2 &&
//       (uppercaseArr.length > 0 || lowercaseArr.length > 0) &&
//       vowelArr.length > 0 &&
//       consonantArr.length > 0 &&
//       uppercaseArr.length + lowercaseArr.length + numberArr.length ==
//         word.length
//     );
//   }
// }

// console.log(isValid("y0Ap"));
const a = [1, 2, 3, 4];
const b = a;
a.push(5);
console.log(b);
