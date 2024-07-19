function isUgly(num) {
  if (num <= 0) {
    return false;
  }
  if (num <= 6) return true;

  while (num > 5) {
    if (num % 5 !== 0) {
      break;
    }
    num = parseInt(num / 5);
  }

  while (num > 3) {
    if (num % 3 !== 0) {
      break;
    }
    num = Number.parseInt(num / 3);
  }

  while (num > 2) {
    if (num % 2 !== 0) {
      break;
    }
    num = parseInt(num / 2);
  }

  return num % 2 === 0 || num % 3 === 0 || num % 5 === 0;
}

console.log(isUgly(234553));

console.log(parseInt(5 / 3));
