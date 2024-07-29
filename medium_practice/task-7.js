function numTeams(rating) {
  let res = 0;
  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length - 1; j++) {
      for (let k = i + 2; k < rating.length; k++) {
        if (
          i < j < k &&
          ((rating[i] < rating[j] && rating[j] < rating[k]) ||
            (rating[i] > rating[j] && rating[j] > rating[k]))
        ) {
          res++;
        }
      }
    }
  }
  return res;
}

console.log(numTeams([1, 2, 3, 4]));
