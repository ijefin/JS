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
jogo. (Número do pior jogo) 
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function avaliaPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(", ");
  let qtdQuebraDeRecords = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacoes[0];
  let menorPontuacao = pontuacoes[0];

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i];
      qtdQuebraDeRecords++;
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraDeRecords, piorJogo];
}

console.log(avaliaPontuacoes(stringPontuacoes));

/* ) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function classificaAluno(nota) {
  let notaCorrigida = arredondar(nota);
  if (notaCorrigida >= 40) {
    console.log(`Aprovado com nota ${notaCorrigida}`);
  } else {
    console.log(`Reprovado com nota ${notaCorrigida}`);
  }
}

function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5));
  } else {
    return nota;
  }
}

classificaAluno(100);
classificaAluno(30);
classificaAluno(38);
classificaAluno(88);
classificaAluno(61);

//verifica se o numero é divisível por 3
function verificaNumero(num) {
  return num % 3 == 0 ? true : false;
}

console.log(verificaNumero(3));

/*) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const converteBoolean = {
  true: "Sim, é bissexto",
  false: "Não é Bissexto",
};

function bissexto(num) {
  return num % 4 === 0 ? converteBoolean.true : converteBoolean.false;
}

console.log(bissexto(2004));

function fatorial(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(5));

fatorial(5);

// ) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaUtil(dia) {
  switch (dia) {
    case 1:
    case 2:
      console.log("Não útil");
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("É um Dia útil");
      break;
    default:
      console.log("Insira uma data válida");
  }
}

diaUtil(5);

// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

function frutas(fruta) {
  const cestoDeFrutas = {
    maca: "Maçã".toLocaleLowerCase(),
    kiwi: "Kiwi".toLocaleLowerCase(),
    melancia: "Melancia".toLocaleLowerCase(),
  };
  const { maca, kiwi, melancia } = cestoDeFrutas;
  switch (fruta) {
    case maca:
      console.log(
        "Temos as melhores maçãs da região! Argentina, Nacionais e importadas =), aproveite!"
      );
      break;
    case kiwi:
      console.log(
        "Oooh, o complemento perfeito para o Açaí!, vou te ajudar a selecionar os melhores da banca!"
      );
      break;
    case melancia:
      console.log("Grauda e deliciosa! Vamos levar 5 por 10?");
      break;
    default:
      console.log(
        `Ops, parece que você encomendou um produto que ainda não possuímos. Temos disponível os produtos ${maca}, ${kiwi} e ${melancia}.`
      );
  }
}

frutas("melancia");

// Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

function retornaVeiculo(veiculos) {
  const garagemDeVeiculos = {
    sedan: "BMW".toLowerCase(),
    hatch: "AUDI A12 2026".toLowerCase(),
    suv: "PORSCHE 911 SUV V12".toLowerCase(),
    motocicleta: "CB 650f".toLowerCase(),
  };
  const { sedan, hatch, suv, motocicleta } = garagemDeVeiculos;
  switch (veiculos) {
    case sedan:
      console.log("BW320, uma belezura de carro! Deseja levá-lo?");
      break;
    case hatch:
      console.log("Uma máquina, um monstro do asfalto! Adquira-o agora!");
      break;
    case suv:
      console.log("Um monstro OffRoad, vamos preencher os papeis?");
      break;
    case motocicleta:
      console.log("Essa aqui é um Imã de buceta irmão!");
      break;
    default:
      console.log("Vamos selecionar um veículo?");
  }
}

retornaVeiculo("cb 650f");

// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(operador1, operando, operador2) {
  switch (operando) {
    case "+":
      console.log(operador1 + operador2);
      break;
    case "-":
      console.log(operador1 - operador2);
      break;
    case "*":
      console.log(operador1 * operador2);
      break;
    case "/":
      console.log(operador1 / operador2);
      break;
    case "%":
      console.log(operador1 % operador2);
      break;
    default:
      console.log("Insira um operando; +, -, *, / ou %");
  }
}

calculadora(1, "+", 5);

// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%

function bonificacao(funcao, salario) {
  let opt = {
    a: "A",
    b: "B",
    c: "C",
    aumentos: {
      dez: 0.1,
      quinze: 0.15,
      vinte: 0.2,
    },
  };

  const {
    a,
    b,
    c,
    aumentos: { dez, quinze, vinte },
  } = opt;
  switch (funcao) {
    case a:
      console.log(salario * dez + salario);
      break;
    case b:
      console.log(salario * quinze + salario);
      break;
    case c:
      console.log(salario * vinte + salario);
      break;
    default:
      console.log("Função inválida! Insira uma função existente! (A, B, C)");
  }
}

bonificacao("C", 2900);

console.log(2900 * 0.2 + 2900);

function porExtenso(num) {
  switch (num) {
    case 1:
      console.log("Um");
      break;
    case 2:
      console.log("Dois");
      break;
    case 3:
      console.log("Três");
      break;
    case 4:
      console.log("Qautro");
      break;
    case 5:
      console.log("Cinco");
      break;
    case 6:
      console.log("Seis");
      break;
    case 7:
      console.log("Sete");
      break;
    case 8:
      console.log("Oito");
      break;
    case 9:
      console.log("Nove");
      break;
    case 10:
      console.log("Dez");
      break;
    default:
      console.log("Número fora do intervalo.");
  }
}

porExtenso(10);

const cardapio = {
  cachorroQuente: {
    idCachorroQuente: 100,
    valorCachorroQuente: 3.23,
  },
  hambugueres: {
    comum: {
      idHamburguer: 200,
      valorHamburguer: 4.0,
    },
    cheesburguer: {
      idCheesburguer: 300,
      valorCheesburguer: 5.5,
    },
  },
  bauru: {
    idBauru: 400,
    valorBauru: 7.5,
  },
  bebidas: {
    refrigerantes: {
      idRefrigerante: 500,
      sabor: {
        cocaCola: "Coca-Cola",
        pepsi: "Pepsi",
        guarana: "Guaraná",
      },
      sucos: {
        idSucos: 600,
        valorSuco: 6.0,
        sabor: {
          uva: "Uva",
          laranja: "Laranja",
          pessego: "Pêssego",
        },
      },
    },
  },
};

const {
  cachorroQuente: { idCachorroQuente, valorCachorroQuente },
  hambugueres: {
    comum: { idHamburguer, valorHamburguer },
    cheesburguer: { idCheesburguer, valorCheesburguer },
  },
  bauru: { idBauru, valorBauru },
  bebidas: {
    refrigerantes: {
      sucos: {
        idSucos,
        valorSuco,
        sabor: { uva, laranja, pessego },
      },
    },
  },
} = cardapio;

function lanchonete(codigo, quantidade, saborSuco) {
  function formataValor(valorItem, quantidadeItem) {
    let totalNota = valorItem * quantidadeItem;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalNota.toFixed(2));
  }

  switch (codigo) {
    case 100:
      console.log(
        `${quantidade} Cachorro(s) Quente, Total: ${formataValor(
          valorCachorroQuente,
          quantidade
        )}`
      );
      break;
    case 200:
      console.log(
        `${quantidade} Hamburguer(es). Total: ${formataValor(
          valorHamburguer,
          quantidade
        )}`
      );
      break;
    case 300:
      console.log(
        `${quantidade} Cheesburguer(s). Total: ${formataValor(
          valorCheesburguer,
          quantidade
        )}`
      );
      break;
    case 400:
      console.log(
        `${quantidade}, Bauru(s). ${formataValor(valorBauru, quantidade)}`
      );
      break;
    case 600:
      switch (saborSuco) {
        case laranja:
          console.log(`Preparando suco de ${saborSuco}!`);
          break;
        case uva:
          console.log(`Preparando suco de ${uva}!`);
          break;
        case pessego:
          console.log(`Preparando suco de ${pessego}!`);
          break;
        default:
          console.log(
            `Sabor não disponível. Disponiveis: ${(uva, pessego, laranja)}`
          );
      }
      console.log(
        `${quantidade} suco(s) de ${saborSuco}. Total: ${formataValor(
          valorSuco,
          quantidade
        )}`
      );
      break;
    default:
      console.log("Produto Inexistente!");
  }
}
lanchonete(600, 8, "Laranja");
