let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a;

let ola = function () {
  return "Olá";
};

ola = () => "Olá";

ola = (_) => "Olá";

//conteto léxico para o This, utilizando arrow functions:

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();

//utilizando arrow function, o bind do this é realizado de forma automática ( this não varia)
