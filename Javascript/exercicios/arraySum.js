//we can use reduce to sum an array of number type.
function simpleArraySum(ar) {
  const totalSum = ar.reduce((prev, curr) => prev + curr);
  console.log(totalSum);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
