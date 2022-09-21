const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 8.3, bolsista: false },
  { nome: "Pedro", nota: 4.2, bolsista: false },
  { nome: "Thiago", nota: 7.8, bolsista: false },
  { nome: "Carlos", nota: 6.5, bolsista: false },
];

//todos alunos são bolsistas?

const todosBolsitas = (param) =>
  param.map((a) => a.bolsista).reduce((a, b) => a && b);

//algum é bolsista?
const algumBolsista = (param) =>
  param.map((a) => a.bolsista).reduce((a, b) => a || b);
console.log(algumBolsista(alunos));
