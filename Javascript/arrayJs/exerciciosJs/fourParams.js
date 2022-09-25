function fourParams(num, min, max, inc = false) {
  num === min || num === max ? (inc = true) : inc;
  inc
    ? console.log(num >= min && num <= max)
    : console.log(num > min && num < max);
}
fourParams(80, 3, 80);
