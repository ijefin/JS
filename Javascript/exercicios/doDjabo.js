function solucao(item) {
  const maxValue = 6;
  if (item.lenght < 3 || item[0] < 0 || item[1] < 0 || item[2] > maxValue) {
    return;
  } else {
    if ((item[0] === item[1] && item[0] < maxValue) && item[0] < maxValue) {
      console.log("PALPITE INVALIDO");
    } else if (item[0] > maxValue || item[1] > maxValue) {
      console.log("ABSURDO");
    } else if (
      (item[0] === item[2] && item[1] === item[2]) ||
      (item[0] !== item[2] && item[1] !== item[2])
    ) {
      console.log("EMPATE");
    } else if (item[0] == item[2] && item[1] != item[2]) {
      console.log(" JOGADOR 1 GANHOU");
    } else if (item[1] == item[2] && item[0] != item[2]) {
      console.log("JOGADOR 2 GANHOU");
    }
  }
}

solucao([2, 3, 1]);

/* PALPITE INVALIDO caso tenha dois pedidos iguais;
// ABSURDO caso algum jogador tenha feito um palpite maior que o maior número possível de tampinhas em jogo, que seriam 6 (3 de cada jogador);
// JOGADOR 1 GANHOU se o jogador 1 tiver ganhado;
// JOGADOR 2 GANHOU se o jogador 2 tiver ganhado;
 EMPATE se tiver ocorrido empate. */
