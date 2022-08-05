// funcao literal
function funcaoLiteral() {
  return 4;
}

//funcao anonima
const anonima = function () {
  return 7;
};

//armazenada em array

const array = [
  funcaoLiteral(),
  2,
  5,
  anonima(),
  function funcaoEmArray(c) {
    return c + 20;
  },
];

console.log(array);
console.log(array[4](5));

//armazenar em um atributo de obj

const obj = {};

obj.falar = function () {
  return "Eae caralho, vai sair essa porra ou n?";
};
console.log(obj.falar());

//passar funcão como parametro
function run(fun) {
  fun();
}

run(function () {
  return console.log("Teste do retorno da função como parametro");
});

//nesses exemplos também podemos dizer que uma função pode transformar seu parâmetro em uma função,
//para receber uma outra função as param
function greeting(name) {
  name = "Jeff";
  console.log("Olá " + name);
}

function processUserInput(callback) {
  var name = console.log("Bati aqui");
  callback(name);
}
//o retorno dessa função é uma função com um parâmetro definido no corpo da função
processUserInput(greeting);

function func1(function_parameter) {
  function_parameter();
}

function func2() {
  console.log("okay!");
}

func1(func2);

//uma função pode retonar ou conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
  g;
}

soma(5, 6)(4);

const englobamento = soma(5, 6);
console.log(typeof englobamento);
englobamento(4);
