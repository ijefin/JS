function average(arr) {
  const amount = arr.length;
  const result = arr.map((item) => item).reduce((prev, curr) => prev + curr);
  return console.log(result / amount);
}

average([5, 5, 5, 5]);
