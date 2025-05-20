// 383. Ransom Note
function canConstruct(ransomNote, magazine) {
  const magazineCount = {};

  // Count letters in magazine
  for (let char of magazine) {
    if (magazineCount[char]) {
      magazineCount[char]++;
    } else {
      magazineCount[char] = 1;
    }
  }

  // Check letters in ransomNote
  for (let char of ransomNote) {
    if (!magazineCount[char] || magazineCount[char] === 0) {
      return false;
    }
    magazineCount[char]--; // Use one letter
  }

  return true;
}
