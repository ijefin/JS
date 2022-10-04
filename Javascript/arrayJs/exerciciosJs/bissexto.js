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
