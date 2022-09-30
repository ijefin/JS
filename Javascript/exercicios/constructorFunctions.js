function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;
  //declaração de variável com let e const deixa o atributo privado

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  //com o this, deixa o método público

  //metodo publico

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(346, 50);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
