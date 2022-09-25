const produtos = [
  { nome: "Geladeira", preco: 2875.9 },
  { nome: "Bicicleta", preco: 2765.9 },
  { nome: "Esteira", preco: 1545.9 },
  { nome: "PC GAMER", preco: 14598.9 },
  { nome: "Monitor 390hz", preco: 4980.9 },
];

//possui 2 parametros no qual podemos realizar operações. Math como no exemplo abaixo.
const somaTotalEstoque = produtos
  .map((c) => c.preco)
  .reduce((prevent, current) => current + prevent);

console.log(somaTotalEstoque);

const pegaMaiorValor = produtos
  .map((c) => c.preco)
  .reduce((prevent, current) => Math.max(prevent, current));

console.log(pegaMaiorValor);
//:c
