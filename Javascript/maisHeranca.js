//toda fuunção tem um atributo chamado .prototype

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reversoReverso = function () {
  // metodo para inverter uma string
  return this.split("").reverse().join("");
};

console.log("Escola Cod3r".reversoReverso());

//adicionando assim a função reverse a String
console.log(String.prototype);
