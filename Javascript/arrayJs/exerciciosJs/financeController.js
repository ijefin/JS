function costsCalc(array) {
  const result = array
    .map((items) => items.preco)
    .reduce((prev, curr) => prev + curr);

  return console.log(result);
}

const finances = [
  { nome: "Futebol", categoria: "Lazer", preco: 500 },
  { nome: "Jogos Oline", categoria: "Lazer", preco: 260 },
  { nome: "Prime Gaming", categoria: "Lazer", preco: 40 },
  { nome: "Jornal", categoria: "Informação", preco: 100 },
  { nome: "Computador", categoria: "Trabalho", preco: 5000.12 },
  { nome: "Dentista", categoria: "Saúde", preco: 100 },
];

costsCalc(finances);
