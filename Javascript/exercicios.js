// crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function realizaCalculo(x, y) {
  return console.log(
    `A soma é: ${x + y}.
    \nA Sutração é ${x - y}.
    \nA Multiplicação é ${x * y}
    \nA Divisão é ${x / y} `
  );
}
realizaCalculo(12, 5);
console.log("\n");
/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function validaTipoDeTriangulo(x, y, z) {
  const valorVerdadeiro = x > 0 && y > 0 && z > 0;
  const podeSerCriado = x + y > z && x + z > y && z + y > x;

  if (podeSerCriado && valorVerdadeiro) {
    console.log("Um triângulo pode ser formado!");
    y === x && x === z
      ? console.log("Triângulo Equilátero")
      : "Não é equilátero pois seus lados não são todos iguals";

    x !== y && x !== z && z !== y
      ? console.log("Triângulo Escaleno")
      : "Não é escaleno, pois seus lados não são todos diferentes";

    z === x || z === y || x === y ? console.log("Triângulo Isóceles") : "a";
  } else {
    console.log("Um triângulo não pode ser formado. Valores Incorretos!");
  }
}

validaTipoDeTriangulo(4, 4, 5);

console.log("\n");

// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente
const exponencial = (a, b) => console.log(a ** b);
exponencial(15, 20);

const divisao = (dividendo, divisor) => {
  const resultado = dividendo / divisor;
  const modulo = dividendo % divisor;
  modulo > 0 ? modulo : "";

  console.log(
    `O resultado da divisão é:${Math.floor(
      resultado
    )} \nO resto da divisão é ${modulo}`
  );
};

divisao(5, 2);

/*Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

