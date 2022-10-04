function sumArrayOfNumbers(array) {
  const result = array
    .map((numbers) => numbers)
    .reduce((prev, curr) => prev + curr);
  return console.log(result);
}

sumArrayOfNumbers([50, 50, 400, 500]);
