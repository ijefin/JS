function letsRepeat(el, repeat) {
  let aux = 0;
  let arr = [];
  while (aux < repeat) {
    aux++;
    arr.push(el);
  }
  console.log(arr);
  console.log(`There is ${repeat} elements named ${el} `);
}
letsRepeat("Cu", 25);

// function repetir(item, quantidade) {
//   return Array(quantidade).fill(item);
// }
