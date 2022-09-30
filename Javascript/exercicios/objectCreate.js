//Estratégias de criação de objetos

// Notação literal

const objLiteral = {};
console.log(objLiteral);

//objeto em JS
console.log(typeof Object, typeof new Object());
const objLiteral2 = new Object();
console.log(objLiteral2);

//Constructor Functions
function Produto(nome, preco, desconto) {
  //atributo publico
  this.nome = nome;

  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto);
  };
}

const p1 = new Produto("Caneta", 8.95, 0.13);

console.log(p1.getPrecoComDesconto());
console.log(p1.nome);
console.log(
  p1.preco +
    ", porque sou um atributo privado, e pertenço somente ao escopo da função"
);

const p2 = new Produto("Lapiseira", 5.45, 0.1);

console.log(p2.getPrecoComDesconto());
console.log(p1.nome);
console.log(p2.preco, p2.desconto + ", Porque também sou privado.");

//by factory function
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 22) * (22 - faltas);
    },
  };
}

const jefferson = criarFuncionario("Jefferson", 7980, 4);
const anna = criarFuncionario("Maria", 11400, 1);
console.log(jefferson.getSalario(), anna.getSalario());

//object.create
const filha = Object.create(null);
filha.nome = "Anna";
console.log(filha);

//uma função famosa que retorna objeto
const fromJson = JSON.parse('{"info": "Im a JSON!"}');
