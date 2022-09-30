//função anonima é uma função sem nome.

const soma = function (x, y) {
  return x + y;
};

const imprimeResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimeResultado(3, 5);
imprimeResultado(3, 5, soma);
imprimeResultado(3, 5, function (x, y) {
  return x - y;
});

imprimeResultado(3, 5, (x, y) => x * y);

const pessoa = {
  falar: () => console.log("Salve"),
  responder() {
    console.log("dale");
  },
};

pessoa.falar();
pessoa.responder();
