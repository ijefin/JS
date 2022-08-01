const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de Honra");
      break;
    case 8:
    case 7:
      console.log("Aprovado!");
      break;
    case 6:
    case 5:
      console.log("Bora de recuperação, quem passa direto é trem!");
      break;
    case 4:
    case 3:
    case 2:
    case 1:
      console.log("Mermão tu se fudeu pra krl");
      break;
  }
};

imprimirResultado(4);

const frutas = "Mamões";
switch (frutas) {
  case "Laranjas":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mamões":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${frutas}.`);
}
