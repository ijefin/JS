const numeros = [1, 2, 3, 5, 7, 8, 9, 4, 12, 5, 6, 7];

//trabalha com o índice e não com o valor
for(let i in numeros){
    console.log(`${i}: ${numeros[i]}`)
}