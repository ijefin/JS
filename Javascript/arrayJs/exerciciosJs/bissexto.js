function bissexto(year) {
  if (year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)) {
    console.log("Bissexto");
  } else {
    console.log("N");
  }
}

bissexto(2028);
bissexto(2022);
bissexto(2023);
bissexto(2024);
bissexto(2025);
bissexto(2026);

// / checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
// function checarAnoBissexto(ano) {
// return new Date(ano, 1, 29).getDate() === 29;
// }
