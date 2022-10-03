function justNumbers(a) {
  return a.filter((a) => typeof a === "number");
}

console.log(justNumbers([1, 2, 3, 4, 5, "asc", "Cu", () => {}, 25]));
