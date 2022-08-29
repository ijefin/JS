//ainda posso realizar modificações em um objeto, porém não posso adicionar mais atributuos key:value

//criando um novo objeto
const produto = Object.preventExtensions({
  noeme: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
});

console.log();

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

//O método Object.create() cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

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

// Para entender o método Object.create, lembre-se apenas de que ele recebe dois parâmetros.
const lifeLeaf = Object.create(Configs, {});
