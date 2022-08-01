const numeros = [1, 2, 3, 5, 7, 8, 9, 4, 12, 5, 6, 7];

//trabalha com o índice e não com o valor
for (let i in numeros) {
  console.log(`${i}: ${numeros[i]}`);
}

const eu = {
  nome: "Jefferson",
  idade: 23,
  cpf: "vish",
  fodao: "Demais",
  namora: "Uma gostosa",
  transaGostoso: "Pra um krl bixo slc",
};

for (let attr in eu) {
  console.log(`${attr}: ${eu[attr]}`);
}

//utilizar para percorrer objetos buscando a chave (atributo)