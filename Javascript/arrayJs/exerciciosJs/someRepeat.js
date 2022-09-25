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
letsRepeat(5, 25);
