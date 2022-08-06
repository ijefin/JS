function criarProduto() {
  return {
    nome: "PC Gamer",
    preco: 12.455,
  };
}

console.log(criarProduto());

const { nome, preco } = criarProduto();
console.log(nome, preco);

function mostraValores({ nome, preco } = criarProduto()) {
  console.log(`O valor do produto ${nome} é ${preco}`);
}

mostraValores();

//factory é uma função que sempre retorna uma NOVA INSTÂNCIA de objeto
