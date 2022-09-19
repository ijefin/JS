function diagonalDifference(arr) {
  let first = 0;
  let second = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    first += arr[i][i];
    second += arr[i][arr.length - 1 - i];
  }
  first - second >= 0 ? (result = first - second) : (result = second - first);

  return result;
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
