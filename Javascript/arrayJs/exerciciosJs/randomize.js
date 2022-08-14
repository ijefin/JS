function randomize(number) {
  const random = Math.random(1, 10) * 10 - 1;

  number < 1 || number > 10
    ? console.log("Valor inválido! Insíra um valor entre 1 e 10")
    : number === random
    ? console.log("Você acertou o número, Ual!")
    : console.log(`Que pena, o numero foi ${random.toFixed()}`);
}

randomize(3);
