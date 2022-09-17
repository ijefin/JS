const horaChegada = (hora) =>
  console.log(
    `Se tu vens por exemplo, às ${hora} da tarde, desde às ${
      hora - 1
    } eu começarei a ser feliz!`
  );

horaChegada(3);

function solucao1(ano) {
  if (ano < -4000) {
    while (ano > -4000) {
      console.log(ano--);
    }
  }

  ano >= -4000 && ano <= 476
    ? console.log("ANTIGA")
    : ano >= 477 && ano <= 1453
    ? console.log("MEDIA")
    : ano >= 1454 && ano <= 1789
    ? console.log("MEDIA")
    : console.log("CONTEMPORANEA");
}

solucao1(-7000);

// ANTIGA se o ano está entre -4000 (4000 a.C.) e 476;
// MEDIA se o ano está entre 477 e 1453;
// MODERNA se o ano está entre 1454 e 1789;
// CONTEMPORANEA se o ano está após 1789.

function solucao(media, frequencia, projetoFinal) {
  const freqMin = 75;
  const mediaMin = 60;
  const minProjeto = 85;

  if (
    (media >= mediaMin && frequencia >= freqMin && projetoFinal > 0) ||
    (media <= mediaMin && frequencia >= freqMin && projetoFinal >= minProjeto)
  ) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}

solucao(80, 74, 78);
// PALPITE INVALIDO caso tenha dois pedidos iguais;
// ABSURDO caso algum jogador tenha feito um palpite maior que o maior número possível de tampinhas em jogo, que seriam 6 (3 de cada jogador);
// JOGADOR 1 GANHOU se o jogador 1 tiver ganhado;
// JOGADOR 2 GANHOU se o jogador 2 tiver ganhado;
// EMPATE se tiver ocorrido empate.
