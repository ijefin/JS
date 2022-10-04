function getLowerNumber(arr) {
  const lower = arr
    .map((item) => item)
    .reduce((prev, curr) => Math.min(prev, curr));
  return console.log(lower);
}

getLowerNumber([25, 1, 26, 2678]);
