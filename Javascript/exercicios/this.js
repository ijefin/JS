//This == isto ou esta

/*definido pelo contexto no qual eu me encontro. Ex. Eu amo esta casa, 
Eu amo esta mesa, ou seja a mesa se encontra no contexto CASA e não em outra casa*/

const Pessoa = {
  nome: "Jefferson Lucas",
  idade: 22,
  getIdade() {
    return this.idade;
  },
};

console.log(Pessoa.getIdade());
