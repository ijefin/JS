class Pessoa {
  constructor(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
  }

  mostrarNomeCompleto() {
    console.log(`${this.nome} ${this.sobreNome}`);
  }

  //falar é um metodo estatico, pois o mesmo não utiliza nenhum atributo de Pessoa.
  static falar() {
    console.log(
      `Olá mundo!, me chamo "Não me chamo mais nada, sou estático" e sou a instância de um objeto JS`
    );
  }
}

const Jane = new Pessoa("Jane", "Doe", 40);

console.log(Jane);

const Jefferson = new Pessoa("Jefferson", "Lucas", 23);
Pessoa.falar();
Jefferson.mostrarNomeCompleto();
console.log(Jefferson);

//Métodos estaticos são chamados com a classe global, e não com seus atributos
//addig