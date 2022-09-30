function soma() {
  let soma = 0;
  for (let i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.5, 5.5, 4.5, 4.5, 6.7));
console.log(soma(1.1, 2.5, "teste"));
console.log(soma("c", "b", "teste"));
