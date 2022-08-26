//cadeia de protótipos (prototype chain)

Object.prototype.GlobalAtribute = "Eu sou o global."; //não fazer isso
//O primeiro objeto definido, sem a utilização de proto, aponta para Object.Prototype
const avo = { atributo1: "A" }; //proto = obj.prototype
const pai = { __proto__: avo, atributo2: "B" }; //proto = avo
const filho = { __proto__: pai, atributo3: "C" }; //proto = pai
// __proto__ consegue herdar os atributos no qual o objeto foi definido
console.log("filho", filho.atributo1);

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
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}KM/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; //super para referênciar o prototipo
  },
};

Object.setPrototypeOf(ferrari, carro); //ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro); //ferrari tem carro como seu prototipo
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(340);
console.log(volvo.status());

ferrari.acelerarMais(340);
console.log(ferrari.status());

// console.log(ferrari.__proto__);
// console.log(ferrari.__proto__ === Object.prototype); // true pois ferrari aponta para Object.prototype

// console.log(volvo.__protp__ === Object.prototype); // true
// //Object.prototype não tem um objeto mais alto que ele
// console.log(Object.prototype.__proto__);
