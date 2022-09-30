
// while (contador <= 10) {
//   console.log(`contando até: ${contador}`);
//   contador++;
// }

for (let c = 0; c <= 10; c++) {
  console.log(`contando até: ${c}`);
}

console.log("============================================");

const notas = [6.5, 5.4, 5.6, 7.8, 5.4, 6.9];
let contador = 0

for (let i = 0; i < notas.length; i++) {
  console.log(`notas = ${notas[i]}`);
  contador += notas[i]
}
console.log(contador)


const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);