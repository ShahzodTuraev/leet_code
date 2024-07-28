// 482. License Key Formatting
function licenseKeyFormatting(s, k) {
  const reqString = s.replaceAll("-", "").split("").reverse().join("");
  let separateStrings = [];
  for (let i = 0; i < Math.ceil(reqString.length / k); i++) {
    separateStrings.push(reqString.slice(i * k, (i + 1) * k));
  }
  return separateStrings.join("-").split("").reverse().join("").toUpperCase();
}

console.log(licenseKeyFormatting("2-4A0r7-4k", 4));
