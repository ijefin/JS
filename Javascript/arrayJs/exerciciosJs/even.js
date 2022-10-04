function onlyEven(array) {
  const result = array.filter(
    (number, index) => number % 2 === 0 && index % 2 === 0
  );

  return console.log(result);
}

onlyEven([10, 20, 50, 43, 84, 82, 210, 208]);
