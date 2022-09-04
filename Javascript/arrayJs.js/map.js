//Map realiza uma transformação em de um array em outro.

// note que o array original não sofre alteração
const nums = [1, 2, 3, 4, 5];

const vezes2 = nums.map((c) => c * 2);
console.log(vezes2, nums);

const soma10 = (e) => e + 10;

console.log(soma10(20));

//O método que passamos para um map, deve possuir um retorno explicito.
//Lets implement the map function!
