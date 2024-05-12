// 17. Letter Combinations of a Phone Number

function letterCombinations(digits: string): string[] {
  let reqArr: string[] = [];
  let resultArr: string[] = [];
  if (digits.length > 0) {
    for (let i: number = 0; i < digits.length; i++) {
      switch (digits[i]) {
        case "2":
          reqArr.push(["a", "b", "c"]);
          break;
        case "3":
          reqArr.push(["d", "e", "f"]);
          break;
        case "4":
          reqArr.push(["g", "h", "i"]);
          break;
        case "5":
          reqArr.push(["j", "k", "l"]);
          break;
        case "6":
          reqArr.push(["m", "n", "o"]);
          break;
        case "7":
          reqArr.push(["p", "q", "r", "s"]);
          break;
        case "8":
          reqArr.push(["t", "u", "v"]);
          break;
        default:
          reqArr.push(["w", "x", "y", "z"]);
          break;
      }
    }
    switch (reqArr.length) {
      case 1:
        resultArr = reqArr[0];
        break;
      case 2:
        for (let j: number = 0; j < reqArr[0].length; j++) {
          for (let k: number = 0; k < reqArr[1].length; k++) {
            resultArr.push(reqArr[0][j].concat(reqArr[1][k]));
          }
        }
        break;
      case 3:
        for (let i: number = 0; i < reqArr[0].length; i++) {
          for (let j: number = 0; j < reqArr[1].length; j++) {
            for (let k: number = 0; k < reqArr[2].length; k++) {
              resultArr.push(reqArr[0][i].concat(reqArr[1][j], reqArr[2][k]));
            }
          }
        }
        break;
      case 4:
        for (let i: number = 0; i < reqArr[0].length; i++) {
          for (let j: number = 0; j < reqArr[1].length; j++) {
            for (let k: number = 0; k < reqArr[2].length; k++) {
              for (let l: number = 0; l < reqArr[2].length; l++) {
                resultArr.push(
                  reqArr[0][i].concat(reqArr[1][j], reqArr[2][k], reqArr[3][l])
                );
              }
            }
          }
        }
        break;
    }
    return resultArr;
  } else {
    return resultArr;
  }
}

console.log(letterCombinations("5678"));
