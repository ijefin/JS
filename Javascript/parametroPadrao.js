//formas de gerar valores padrões para um argumento:
//forma1
function soma(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0));

function soma2(a, b, c) {
  //segunda forma
  a = a != undefined ? a : 1;
  //terceira forma
  b = 1 in arguments ? b : 1;
  // terceira forma
  c = isNaN(c) ? 1 : c;
}
