// 28. Find the Index of the First Occurrence in a String
function strStr(haystack, needle) {
  if (!haystack.includes(needle)) {
    return -1;
  } else {
    let resultArr = [];
    for (let i = 0; i < haystack.length; i++) {
      haystack.slice(0, i + 1).includes(needle) &&
        resultArr.push(i + 1 - needle.length);
    }
    return resultArr[0];
  }
}

console.log(strStr("wadbutsad", "sad"));
