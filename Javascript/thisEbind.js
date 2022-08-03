const pessoa = {
  saudacao: "Bom Dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
// const falar = pessoa.falar;
// falar(); //conflito entre paradigmas: funcional e OO

//para resolver, podemos fazer assim:

//o bind consegue referênciar o this do objeto, utilizando o próprio objeto como parâmetro
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

bind() // método responsável para amarrar um objeto, referênciando o this do objeto.