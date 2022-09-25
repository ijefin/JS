function repeatSymbols(amount) {
  let result = "";
  for (let i = 1; i <= amount; i++) {
    result += "+";
  }
  console.log(result);
  return console.log(`there is ${result.length} symbols of PLUS`);
}

repeatSymbols(12);

//filling with array.fill
// function simboloMais(quantidade) {
//   return console.log(Array(quantidade).fill("+").join(""));
// }

// simboloMais(25);
