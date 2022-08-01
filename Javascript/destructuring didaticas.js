const animal = {
  nome: "Jacaré",
  tamanho: `${3} metros`,
  agressivo: "Sim",
  comidaFavorita: "Tartaruga, hmm crocante!",
};

function destruct({ nome, tamanho, agressivo, comidaFavorita } = animal) {
  return console.log(nome, tamanho, agressivo, comidaFavorita);
}

destruct()

const emArrow = ({nome, tamanho, agressivo, comidaFavorita} = animal) => console.log(nome, tamanho, agressivo, comidaFavorita)

emArrow()
