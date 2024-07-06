// 2582. Pass the Pillow
function passThePillow(n: number, time: number): number {
  const direction: number = Math.floor(time / (n - 1));
  // if direction is add number direction is opposite else right direction
  let order: number;
  if (direction % 2 == 0) {
    order = (time % (n - 1)) + 1;
  } else {
    order = n - (time % (n - 1));
  }
  return order;
}
