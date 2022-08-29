//quando queremos passar um número indeterminado de parâmetros, utilizamos os operadores spread e rest

// rest
function listagem(primeiro, segundo, ...outros) {
  console.log(
    `Na lista estão: ${primeiro}, ${segundo}. Os demais são: ${outros.join(
      ", "
    )}.`
  );
}

listagem("Pedro", "Maria", "João", "Marcus", "Tiago");
// Na lista estão: Pedro, Maria. Os demais são: João, Marcus, Tiago.

// spread
// contatenando 2 arrays sem o método concat

const pessoas = ["Pedro", "Maria", "João"];

//pessoas é um array, para concatena-lo ao meu novo array, utilizo o spread "...meuArray"
const todasAsPessoas = [...pessoas, "Marcus", "Tiago"];

console.log(todasAsPessoas);
// [ 'Pedro', 'Maria', 'João', 'Marcus', 'Tiago' ]

const jefinho = ["gostoso", "lindo", "maravilhoso"];

const anna = [...jefinho, "saborosa", "sagaz", "perfeita"];

console.log(anna);

function soma(...valores) {
  var total = 0;

  for (const item of valores) {
    total += parseInt(item);
  }

  return total;
}

console.log(soma(1, 2, 3, 4, 50, 10, 23));
// 93
