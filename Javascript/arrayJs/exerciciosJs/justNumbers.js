function justNumbers(a) {
  return a.filter((a) => typeof a === "number");
}

console.log(justNumbers([ "asc", "Cu", () => {}]));
