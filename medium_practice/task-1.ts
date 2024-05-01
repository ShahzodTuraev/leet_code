function isValidSudoku(board: string[][]): boolean {
  const sameElementCheck = (target: string[]): boolean => {
    const noPointArr = target.filter((e: string) => e !== ".");
    let result: boolean = true;
    for (let i = 0; i < noPointArr.length; i++) {
      for (let j = 0; j < noPointArr.length; j++) {
        if (i !== j && noPointArr[i] == noPointArr[j]) {
          result = false;
        }
      }
    }
    return result;
  };
  const rotateArr = (target: string[][]) => {
    let totalArr: string[][] = [];
    for (let i = 0; i < target.length; i++) {
      totalArr.push(
        target.map((ele) => {
          return ele[i];
        })
      );
    }
    return totalArr;
  };
  const subArr = (target: string[][]) => {
    let subTotal: string[][][] = [];
    let subLineTotal: string[][] = [];
    let subLine: string[] = [];
    for (let h = 0; h < target.length; h = h + 3) {
      for (let i = 0; i < target.length; i = i + 3) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            subLine.push(target[j + h][k + i]);
          }
        }
        subLineTotal.push(subLine);
        subLine = [];
      }
      subTotal.push(subLineTotal);
      subLineTotal = [];
    }
    return subTotal.flatMap((ele) => ele);
  };
  const horizontalCheck: boolean[] = board.map((ele) => {
    return sameElementCheck(ele);
  });
  const verticalCheck: boolean[] = rotateArr(board).map((ele) => {
    return sameElementCheck(ele);
  });
  const subCheck: boolean[] = subArr(board).map((ele) => {
    return sameElementCheck(ele);
  });
  if (
    horizontalCheck.includes(false) ||
    verticalCheck.includes(false) ||
    subCheck.includes(false)
  ) {
    return false;
  } else {
    return true;
  }
}
