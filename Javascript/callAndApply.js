const produto = {
  nome: "Notebook",
  preco: 4598.15,
  desc: 0.15,
  getPreco,
};

const { preco, desc } = produto;

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${preco.toFixed(1) * (1 - desc) * (1 + imposto)}`;
}

console.log(getPreco());

const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.12, "R$"));
console.log(getPreco.apply(carro, [0.17, 'R$']));
