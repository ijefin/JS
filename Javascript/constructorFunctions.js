class Carro {
  constructor(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //método publico
    this.acelerar = () => {
      velocidadeAtual + delta <= velocidadeMaxima
        ? (velocidadeAtual += delta)
        : (velocidadeMaxima = velocidadeAtual);
    };

    this.getVelocidadeAtual = () => velocidadeAtual;
  }
}

const uno = new Carro(150, 2);
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(369, 86);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

//a função construtora é o meu molde, ( funciona como uma classe em outras langs) e meus métodos são funções.
