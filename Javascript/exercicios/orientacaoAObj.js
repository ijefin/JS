//Introdução a OO em JS.

//1 Objeto é uma coleção dinamica de pares CHAVE: VALOR

const produto = new Object();

//object é uma função, ao usar uma função com o new, obtemos uma função construtora que instancia um objeto.
//Podemos atribuir um novo objeto chave:valor com notação ponto:
produto.nome = "Cadeira";

//e também como um array, sendo o que está dentro do array a chave
produto["Marca do produto"] = "Generica";
produto.preco = 220;
produto.dataDeRecebimento = new Date();

console.log(produto);

// consigo incluir dinamicamente um atributo ao objeto utilizando notação ponto, mesmo que o mesmo não exista, e da mesma forma, consigo deletar.

delete produto.preco;

delete produto["Marca do produto"];

console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Jeff",
    idade: 24,
    endereco: {
      logradouro: "Rua àgua comprida",
      numero: 277,
    },
    condutores: [
      {
        nome: "Anna",
        idade: 23,
      },
      {
        nome: "Paulina",
        idade: 62,
      },
    ],
  },
  calculaValorSeguro: (a) => {
    a;
  },
};

console.log(carro);
carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante";

console.log(carro);

delete carro.condutores;
delete carro.proprietario;
console.log(carro);

//prestar atenção ao acessar um elemento encadeado. como o OBJ carro existe, é possível acessar qualquer coisa dentro de carro, mesmo que não exista.
//quando o mesmo não existir, o retorno será undefined
console.log(carro.condutores);
//porém ao tentar acessar algo que está indefinido, um erro é disparado
console.log(carro.condutores.lenght);
