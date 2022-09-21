const alunos = [
  { nome: "João", nota: 8.2 },
  { nome: "Maria", nota: 9.5 },
  { nome: "Anna", nota: 10 },
];

//imperativo
let totalImperativo = 0;
for (let i = 0; i < alunos.length; i++) {
  totalImperativo += alunos[i].nota;
}

console.log(totalImperativo / alunos.length);

// declarativo
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);

console.log(typeof getNota);
