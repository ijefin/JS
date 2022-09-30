const notas = [8.5, 5.4, 9.4, 4.5, 4.7, 7.4];

//sem callbacks

let notasBaixas = [];

for (const i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

//com callback
//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
notasBaixas = notas.filter((nota) => nota < 7);
console.log(notasBaixas);
