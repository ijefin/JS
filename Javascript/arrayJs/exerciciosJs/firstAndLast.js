function firstAndLastEl(el) {
  const firstAndLast = el.map((e) => e[0]);

  return console.log(firstAndLast);
}

firstAndLastEl([
  "cu",
  1,
  2,
  543,
  "negative, ",
  "asdasdsa",
  function (a) {
    return console.log(a);
  },
]);

//a
