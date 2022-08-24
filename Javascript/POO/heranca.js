class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} Fez um ruído!`);
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  latir() {
    console.log(`${this.nome} Latiu!`);
  }
}

//Instânciação da classe
const cachorro = new Animal("Simba");
const brutus = new Cachorro("Brutus");

cachorro.falar();
brutus.falar();
brutus.latir();
