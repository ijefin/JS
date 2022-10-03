function firstAndLastEl(el) {
  const firstEl = el[0];
  const lastEl = el[el.length - 1];
  return console.log([firstEl, lastEl]);
}
firstAndLastEl([1, 2, 3, 4, 5, 6]);
