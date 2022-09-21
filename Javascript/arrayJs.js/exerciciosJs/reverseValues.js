function reverseValues(value) {
  typeof value === "boolean"
    ? console.log(!value)
    : typeof value === "number" && value > 0
    ? console.log(-value)
    : console.log("The value must be a boolean or a number ");
}

reverseValues(-5);
reverseValues(true);
reverseValues(55);
reverseValues(false);
reverseValues(555);
reverseValues(true);
