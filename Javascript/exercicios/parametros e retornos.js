function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido ${area}m2`);
  } else {
    return area;
  }
}

console.log(area(2, 2));

//somar undefined com um number retorna NaN
console.log(area(2));

console.log(area())

//utiliza só a quantidade de parâmetros definidos e ignora o restante
console.log(area(2, 3, 5, 6, 7)) 

//cuidar com os retornos das funções, pois o valor da condicional não deixou que o retorno fosse válido.
console.log(area(5, 5))

