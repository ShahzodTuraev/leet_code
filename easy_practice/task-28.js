// 1598. Crawler Log Folder
function minOperations(logs) {
  let count = 0;
  for (let i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case "../":
        if (count == 0) {
          count = count;
        } else {
          count = count - 1;
        }
        break;
      case "./":
        count = count;
        break;
      default:
        count = count + 1;
    }
  }
  return count;
}

console.log(
  minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"])
);
