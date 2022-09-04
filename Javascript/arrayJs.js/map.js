//Map realiza uma transformação em de um array em outro, diferente do foreach, que simplesmente percorre um array e devolve os dados

// note que o array original não sofre alteração
const nums = [1, 2, 3, 4, 5];

const vezes2 = nums.map((c) => c * 2);
console.log(vezes2, nums);

//O método que passamos para um map, deve possuir um retorno explicito.
const otherNums = [1, 2, 3, 4, 5];
const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraReal = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = otherNums.map(soma10).map(triplo).map(paraReal);
console.log(resultado);
