// 2129. Capitalize the Title
function capitalizeTitle(title) {
  const vanText = title.toLowerCase().split(" ");
  let text = [];
  for (const word of vanText) {
    if (word.length > 2) {
      text.push(word[0].toUpperCase() + word.slice(1));
    } else {
      text.push(word);
    }
  }
  return text.join(" ");
}

console.log(capitalizeTitle("First leTTeR of EACH Word"));
