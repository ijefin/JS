const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos);

//POP, REMOVE O ÚLTIMO ELEMENTO DE UM ARRAY.
pilotos.pop();
console.log(pilotos); //sem o último elemento
console.log(pilotos.length);

// PUSH, ADICIONA UM ELEMENTO A ULTIMA POSIÇÃO DO ARRAY
pilotos.push("Verstappen");
console.log(pilotos);
console.log(pilotos.length);

// SHIFT, REMOVE O PRIMEIRO ELEMENTO DA LISTA
pilotos.shift();
console.log(pilotos);
console.log(pilotos.length);

//UNSHIFT, ADICIONA UM ELEMENTO AO INÍCIO DO ARRAY.
pilotos.unshift("Barrichello");
console.log(pilotos);
console.log(pilotos.length);

//SPLICE, PODE ADICIONAR E REMOVER ELEMENTOS.
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);
console.log(pilotos.length);
//REMOVER COM SPLICE
pilotos.splice(3, 1);
console.log(pilotos);
console.log(pilotos.length);

//SLICE, PEGA UM PEDAÇO DO ARRAY COM BASE NOS PARÂMETROS PASSADO E RETORNA UM NOVO ARRAY.
const alguns = pilotos.slice(1, 4); //Pega a partir do primeiro, o pega o último -1;
console.log(alguns);
console.log(alguns.length);
