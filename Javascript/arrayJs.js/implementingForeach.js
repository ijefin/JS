//foreach por baixo dos panos
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Jeff", "Lucas", "Gomes"];

aprovados.forEach2((nome, indice) => console.log(nome, indice + 1));

console.log(Array.prototype.forEach2);