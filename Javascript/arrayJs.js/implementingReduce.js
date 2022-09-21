Array.prototype.reduce2 = function (callback, initialValue) {
  const indiceInicial = initialValue ? 0 : 1;
  let acumulador = initialValue || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce2((a, b) => a + b, 21));
