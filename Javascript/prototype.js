function Aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const javascript = new Aula("Bem Vindo", 123);
const python = new Aula("Bem Vindo", 467);

console.log(javascript, python);

console.log(Aula.prototype);

const { nome, videoId } = javascript;

console.log(`${nome} aulas de Javascript, ${videoId}`);

//simulando o new
function novo(f, ...params) {
  // ...recebe varios parametros e o concatena em um array
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
