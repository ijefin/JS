//foreach, realiza a listagem dos itens de um array, e caso seja especificado, realiza um ação em cima do mesmo

const jogos = ["Futebol", "Basquete", "Vôlei", "Rugby", "American Football"];

jogos.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

jogos.forEach((nome, indice) => console.log(nome, ":", indice + 1));

const jogaEmUmArray = function (a, b) {
  var arrayParaJogos = [];
  arrayParaJogos.push(a, b);
  return console.log(arrayParaJogos);
};

jogos.forEach((nome, indice) => jogaEmUmArray(nome, indice + 1));

const exibirJogos = (jogos, indice) => console.log(jogos, indice + 1);
jogos.forEach(exibirJogos);

jogos.forEach(function (nome, indice, array) {
  console.log(nome, indice, array);
});

