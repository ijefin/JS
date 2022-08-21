const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

let i = 1;
while (i <= 10) {
  console.log(sequencia.valor);
  i++;
}

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);