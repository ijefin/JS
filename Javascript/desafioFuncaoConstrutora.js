const pessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const Anna = pessoa("Anna");
Anna.falar();

function Pessoa(nome = "fulano") {
  this.mostrarNome = () => console.log(`Olá ${nome}`);
}

const jefferson = new Pessoa("Jefferson");
jefferson.mostrarNome();