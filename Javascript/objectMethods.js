const pessoa = {
  nome: "Jefferson",
  idade: 22,
  cpf: "179.437.908-07",
  profissao: {
    ti: "Software Developer",
    salario: 3600,
    tempoDeAtuação: 2,
  },
};

console.log("Keys = Chave das properties do obj", Object.keys(pessoa));
console.log("Values = Valor das properties do obj ", Object.values(pessoa));
console.log("Entries", Object.entries(pessoa));

//destruct dentro do forEach utilizando os entries de um obj
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataDeNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});

console.log(pessoa.dataDeNascimento);
console.log(Object.keys(pessoa));

// Object.assign()

const dest = { nome: "Jefferson" };
const idade = { idade: 21 };
const tamanhoDoPenis = { penis: 18 };

const resultado = Object.assign(dest, idade, tamanhoDoPenis);
console.log(resultado);

// Object.freeze(resultado);
dest.idade = 59;
console.log(resultado);
