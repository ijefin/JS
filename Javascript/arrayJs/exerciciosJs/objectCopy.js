function removerPropriedade(objeto, nomeDaPropriedade) {
  const copia = Object.assign({}, objeto);
  delete copia[nomeDaPropriedade];
  return console.log(copia);
}

Object.is(removerPropriedade({ abacate: 1, b: 2 }, "abacate"));

const myObj = {
  nome: "Jeff",
  idade: 22,
  cpf: "1258125855",
};

console.log(delete myObj["cpf"]);
console.log(myObj);
