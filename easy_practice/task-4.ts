// 13. Roman to Integer
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s: string): number {
  let toNum: any[] = s.split("").map((ele: string) => {
    switch (ele) {
      case "M":
        return 1000;
        break;
      case "D":
        return 500;
        break;
      case "C":
        return 100;
        break;
      case "L":
        return 50;
        break;
      case "X":
        return 10;
        break;
      case "V":
        return 5;
        break;
      case "I":
        return 1;
        break;
      default:
        return "";
        break;
    }
  });
  let numArr: number[] = toNum.map(
    (ele: number, index: number, arr: number[]) => {
      if (arr.length == 1) {
        return ele;
      } else {
        if (index > 0) {
          return ele <= arr[index - 1]
            ? ele < arr[index + 1]
              ? 0
              : ele
            : ele - arr[index - 1];
        } else {
          return ele >= arr[index + 1] ? ele : 0;
        }
      }
    }
  );
  return numArr.reduce((a: any, b: any) => a + b, 0);
}

console.log(romanToInt("I"));
