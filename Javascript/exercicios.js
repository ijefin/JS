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

const converteValorParaReal = (valor) =>
  console.log(
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor)
  );

converteValorParaReal(0.30000000000000004);

/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  const jurosSimples = capitalInicial * taxaDeJuros * tempoDeAplicacao;
  console.log(`${jurosSimples}`);
}

jurosSimples(1000, 0.1, 0.5);

function jurosComposto(
  capitalInicial = 0,
  taxaDeJuros = 0,
  tempoDeAplicacao = 0
) {
  const jurosComposto = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao;
  console.log(jurosComposto);
}

/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de t cada possível resultadal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um parao, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function baskhara(a, b, c) {
  const resultado = [];
  let delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
    let x2 = ((-b - Math.sqrt(delta)) / 2) * a;
    resultado.push(x1, x2);
    //forma de desestruturar um ARRAY
    // const [valor1, valor2] = [x1, x2];
    // console.log(`x1 = ${valor1} e x2 = ${valor2}`);
    console.log(resultado);
  } else {
    console.log("Ø");
  }
}
baskhara(3, -15, 12);

/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/

const pontuacoes = [pontuacao1, pontuacao2, pontuacao3];
