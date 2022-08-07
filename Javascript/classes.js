// Ao utilizar uma classe com um método construtor no browser utilizando this, ele sera apresentado como undefined pois o this irá variar.
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const Jefferson = new Pessoa("Jefferson");
Jefferson.falar();


//Já utilizando uma função factory, sempre será apontado para a variável certa pois não é necessário o uso do this
//relembrando o contexto léxico, possuindo acesso ao escopo do método criado.
const pessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const Anna = pessoa("Anna");
Anna.falar();
