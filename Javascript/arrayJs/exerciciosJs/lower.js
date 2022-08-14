function getLowerNumber(arra) {
  const lower = arra
    .map((item) => item)
    .reduce((prev, curr) => Math.min(prev, curr));
  return console.log(lower);
}

getLowerNumber([25, -12, 26, 2678]);
getLowerNumber([25, -12, 26, 12]);
getLowerNumber([25, -12, 26, 12]);
