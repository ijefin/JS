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
