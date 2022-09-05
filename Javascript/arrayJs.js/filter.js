const produtos = [
  { nome: "Notebook", preco: "5995", fragil: true },
  { nome: "Teclado Gamer Hyperx Allow Fps RGB", preco: 450.45, fragil: true },
  { nome: "Copo De Vidro", preco: "7.49", fragil: true },
  { nome: "Copo de Plástico", preco: "1.99", fragil: false },
  { nome: "Tampo de aço", preco: "359.89", fragil: false },
  { nome: "Monitor Gamer Mancer ", preco: "1845.90", fragil: false },
];

//filter realiza uma validação com base no teste que o usuário desejar que seja verdadeiro ou falso.
const filtroFalso = produtos.filter((c) => c.fragil === false);
console.log(filtroFalso);
