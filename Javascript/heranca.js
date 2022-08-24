//cadeia de protótipos (prototype chain)

Object.prototype.GlobalAtribute = "Eu sou o global.";
//O primeiro objeto definido, sem a utilização de proto, aponta para Object.Prototype
const avo = { atributo1: "A" };
const pai = { __proto__: avo, atributo2: "B" };
const filho = { __proto__: pai, atributo3: "C" };
// __proto__ consegue herdar os atributos do qual o objeto foi definido
console.log(filho.atributo1);

//caso o atributo não exista em nenhum dos objetos (filho, pai, avô e Object.Prototype), o resultado será undefined
console.log(filho.atributo0);

//Buscará o valor em Obj.Prototype
console.log(filho.GlobalAtribute);
console.log(filho.atributo1);

//Caso um atributo seja encontrado dentro do próprio objeto, ele não o buscará em uma cadeia de prototipos.
console.log(filho.atributo3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {},
};

const lol = {
  personagens: 165,
  tudoRoubado: "Só na mão dos outros!",
};
