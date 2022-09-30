//ainda posso realizar modificações em um objeto, porém não posso adicionar mais atributuos key:value

//criando um novo objeto
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "borracha";
// produto.novoAtributo = "novo atributo :3"; //não surtirá efeito pois o objeto não é extensível
delete produto.tag;
console.log(produto);

//object.seal
//Consigo alterar os valores, mas não consigo adicionar nem excluir valores.

const pessoaSeal = { nome: "Ju", idade: 25 };
Object.seal(pessoaSeal);
console.log("Está selado:", Object.isSealed(pessoaSeal));
pessoaSeal.nome = "jeff";
delete pessoaSeal.nome;
pessoaSeal.bora = "tomar uma";

// object.freeze
//torna o objeto completamente constante.

const joguinhosDePc = {
  nome: "counterStrike",
  lancamento: 1998,
  genero: "fps",
};

Object.freeze(joguinhosDePc);
console.log("Freezado:", Object.isFrozen(joguinhosDePc));
joguinhosDePc.nome = "Lol";
delete joguinhosDePc.genero;
joguinhosDePc.possuiAntiCheat = true;

//sintaxe literal

const pessoa = {
  nome: "testeNome",
  sobrenome: "testeSobrenome",
};

//para criar com o New, necessitamos de uma função construtora:

const pessoaDoida = new Object();

pessoaDoida.nome = "Valor";
pessoaDoida.idade = 2;

console.log(pessoaDoida);

//constructor function
function Lapis(cor, tamanho, quantidadeDeUso, recomendadoApontarCom) {
  this.cor = cor;
  this.tamanho = tamanho;
  this.quantidadeDeUso = quantidadeDeUso;
  this.recomendadoApontarCom = recomendadoApontarCom;
}

//instância para criação de um novo Obj utilizando o Op new
const lapisVerde = new Lapis("verde", 12, 200, "Estilete");

console.log(lapisVerde);

const { cor, recomendadoApontarCom } = lapisVerde;
console.log(cor, recomendadoApontarCom);

//utilizando o Object.Create

const meuObjComCreate = Object.create(pessoa, {
  fun: function nome() {
    return console.log("Olá Nome!");
  },
});

console.log(meuObjComCreate);

function Configs(pvpOn, difficulty, texturePack, friendlyFire) {
  this.pvpOn = pvpOn;
  this.difficulty = difficulty;
  this.texturePack = texturePack;
  this.friendlyFire = friendlyFire;
}

const minecraft = new Configs(true, "Hard", "Equanimity", false);
console.log(minecraft);
const counterStrike = new Configs(true, "Online-Mode", "GlobalTexture", true);
console.log(counterStrike);

//O método Object.create() cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

const validator = {
  isElegible: "teste",
};

// Para entender o método Object.create, lembre-se apenas de que ele recebe dois parâmetros.
const lifeLeaf = Object.create(validator, {
  properties: {
    nome: "LifeLeaf, The Game",
    lancamento: "02/10/1999",
  },
});

console.log(lifeLeaf.__proto__);
console.log(lifeLeaf.properties);

const objOrg = { empresa: "ABC Corp" };

const funcionario = Object.create(objOrg, { nome: { valor: "FuncionarioUm" } });

console.log(funcionario.__proto__); // { empresa: "ABC Corp" }
console.log(funcionario.nome.valor); // "FuncionarioUm"

console.log(this);
