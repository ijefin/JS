class Pessoa {
  constructor(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
  }
}

const Jane = new Pessoa("Jane", "Doe", 40);

console.log(Jane);
