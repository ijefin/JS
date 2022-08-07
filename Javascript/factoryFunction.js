function criarProduto(nome, preço) {
  return {
    nome,
    preço,
    desconto: 0.1,
  };
}

console.log(criarProduto("PC GAMER", 12.553));
console.log(criarProduto("Geladeira Frost Free", 1250));
console.log(criarProduto("TV 42", 4500));
