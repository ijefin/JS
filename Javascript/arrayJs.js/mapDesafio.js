// cria uma função que gera um objeto e depois o transforme em um json

function constroiObjeto(nome, preco, carrinho = []) {
  return {
    nome,
    preco,
  };
}

const borracha = new constroiObjeto("Borracha", 3.45);

const lapis = new constroiObjeto("Lápis", 1.55);

const tesoura = new constroiObjeto("Tesoura", 3.95);

const apontador = new constroiObjeto("Apontador", 1.95);

const carrinho = [];
carrinho.push(borracha, lapis, tesoura, apontador);
console.log({ carrinho });

const carrinhoEmJson = JSON.stringify(carrinho);

console.log(carrinhoEmJson);

// convertendo o json para objeto:

const data = JSON.parse(carrinhoEmJson);

const filtrandoMeusDados = data.map((c) => c.preco);
console.log(filtrandoMeusDados);
