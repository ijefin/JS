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
// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

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

const exponencial = (a, b) => console.log(a ** b);
exponencial(15, 20);