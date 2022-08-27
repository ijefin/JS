function meuObjeto() {}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();

//quando eu crio um objeto a partir de uma função construtora usando o New, o prototipo do objeto aponta para a funcaoQueCriei.Prototype
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj1.__proto__);

meuObjeto.prototype.nome = "Algum nome";
meuObjeto.prototype.falar = function () {
  console.log(`Bom dia, meu nome é ${this.nome}`);
};

obj1.falar();
obj2.nome = "Jeff";
obj2.falar();
