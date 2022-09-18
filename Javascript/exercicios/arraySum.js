//we can use reduce to sum an array of numbers
function simpleArraySum(ar) {
  const somaTotal = ar.reduce((somado, aSomar) => somado * aSomar);
  console.log(somaTotal);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
