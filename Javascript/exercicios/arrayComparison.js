function compareTriplets(a, b) {
  let zezin = 0;
  let outroZezin = 0;
  let finalArray = [];

  for (let i = 0; i <= 2; i++) {
    if (a[i] > b[i]) {
      zezin += 1;
    } else if (b[i] > a[i]) {
      outroZezin += 1;
    }
  }

  finalArray.push(zezin, outroZezin);
  return console.log(finalArray);
}

compareTriplets([5, 6, 7], [3, 6, 10]);
compareTriplets([17, 28, 30], [99, 16, 8]);

//Compare if the value is bigger than or equals.
