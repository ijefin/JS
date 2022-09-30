const pai = {
  nome: "Paulo",
  corDoCabelo: "Preto",
  corDePele: "Moreno",
};

const joyce = Object.create(pai);
joyce.nome = "Joyce";
console.log(joyce.corDePele);

const anna = Object.create(pai, {
  nome: {
    value: "Anna",
    writable: false,
    enumerable: true,
  },
});

console.log(
  `${anna.nome} tem cabelo ${anna.corDoCabelo} e a cor de pele é ${anna.corDePele}`
);

console.log(Object.keys(joyce)); //se a propriedade enumerable for igual a false, as keys do mesmo não serão exibidas
console.log(Object.keys(anna));

for (let key in anna) {
  //   console.log("log do for", key);
  anna.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança ${key}`);
}
