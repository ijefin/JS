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

//BREAK: pós satisfazer a condição, pausa o laço e vai para o proximo bloco de código (desvio de fluxo)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let c in nums) {
  console.log(`${c}: ${nums[c]}`);
  if (c == 5) {
    break;
  }
}

//pós satisfazer a condição, continua a repetição do laço
for (let x in nums) {
  console.log(`${x}: ${nums[x]}`);
  if (x == 5) {
    continue;
  }
}

//caso eu deseje interromper a operação do laço mais distante, utilizo um rótulo, pois o break irá parar o laço for mais próximo
externo: for (let a in nums) {
  for (let b in nums) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}
