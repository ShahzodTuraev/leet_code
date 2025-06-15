// 3206. Alternating Groups I
function numberOfAlternatingGroups(colors) {
  const newColors = [colors[colors.length - 1], ...colors, colors[0]];
  let result = 0;
  for (let i = 1; i <= colors.length; i++) {
    if (newColors[i] !== newColors[i - 1] && newColors[i] !== newColors[i + 1])
      result++;
  }
  return result;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
