const jogada = (jogador) => jogador;

const computador = (max, min) => Math.floor(Math.random() * (max - min) + min);

const verifica = (maquina, suaJogada) => suaJogada === maquina ? "Você acertou!" : "O computador venceu!"

console.log(computador(1, 5))
console.log(verifica(computador(1, 5), jogada(4)))
