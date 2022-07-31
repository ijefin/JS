const pessoa = {
  nome: "Jefferson Lucas Gomes",
  idade: 23,
  cpf: "179.437.907-07",
  comidaFavorita: "Batata Frita com Strogonoff",
  endereço: {
    logradouro: "Rua Água Comprida",
    numero: 277,
    complemento: "casa A",
  },
};

//é possível desestruturar um objeto com a nova sintaxa do ecs6 da seguinte forma
const { nome, idade } = pessoa;

//onde é declarado um bloco de código com as chaves requisitadas na sua necessidade, e atribuindo o valor ao próprio objeto
console.log(nome, idade);

//também é possível atribuir variáveis a chave do objeto para facilitar a escrita
const { nome: n, idade: i } = pessoa;

console.log(n, i);

//podemos também iniciar chaves que não existem no objeto com um valor implicito
const { cpf: c, bemHumorada = true } = pessoa;
console.log(c, bemHumorada);

//não podemos declarar uma chave inexistente no objeto
const { conta: { agencia, saldo },
} = pessoa;

console.log(agencia, saldo);
