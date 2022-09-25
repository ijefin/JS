function biggerThan(numb1, numb2) {
  if (typeof numb1 != "number" || typeof numb2 != "number") return false;
  return console.log(numb1 >= numb2);
}
biggerThan(2, 5);
