class Lancamento {
  constructor(nome = "Generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

//classes em JS também são funções.
console.log(typeof Lancamento);

