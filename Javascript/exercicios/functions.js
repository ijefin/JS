const criar = function (a, b) {
  console.log(a + b);
};

criar(1, 5);

//em arrow

const soma = (a, b) => {
    return a + b
}

soma(5, 5)

//retorno implicito / Variável, função arrow param
const subtracao =  (k, j) => k - j
console.log(subtracao(1, 5))


function dizOi(algo){
    return console.log(algo)
}

dizOi("Eai")

const helloWorld = a => console.log(a)
helloWorld('Eai Mundão')


















































