// 2582. Pass the Pillow
function passThePillow(n, time) {
  const lastPoint = n - 1;
  const direction = Math.floor(time / (n - 1));
  // if direction is add number direction is opposite else right direction
  let order;
  if (direction % 2 == 0) {
    order = (time % (n - 1)) + 1;
  } else {
    order = n - (time % (n - 1));
  }
  return order;
}

console.log(passThePillow(4, 7));
