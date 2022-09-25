console.log(typeof Array, typeof new Array(), typeof []);

let jogosEmMeuPc = [
  "Lost Ark",
  "League Of Legends",
  "Phasmofobia",
  "Minecraft Dungeons",
  "Minecraft",
];

console.log(jogosEmMeuPc);

const jogosQueFaltam = ["Sekiro", "GTA5", "Elden Ring"];
console.log(jogosQueFaltam);

console.log(jogosQueFaltam[0]);
console.log(jogosQueFaltam[1]);
console.log(jogosQueFaltam[2]);
console.log(jogosQueFaltam[3]); //undefinied

jogosQueFaltam.push("Valorant");
console.log(jogosQueFaltam);
jogosQueFaltam[8] = "Algum lançamento futuro.";
console.log(jogosQueFaltam);

const arrayOrdenado = jogosQueFaltam.sort();
console.log(
  "O método Sort ordena os elementos do array, e cria um novo array",
  jogosQueFaltam
);

delete jogosQueFaltam[1];
console.log(
  "Ao deletar um elemento do array, o índice daquele elemento não é reordenado, ele apenas se marca como 'undefinied': ",
  jogosQueFaltam[1]
);

let novosJogos = ["Sekiro", "GTA5", "Elden Ring"];

/*O primeiro argumento de splice, é o indice de onde o k
array deve começar a contar, o segundo é a quantidade de 
itens a ser deletados a partir do indice dado no primeiro
 parametro, e o terceiro é uma quantidade indefinida de 
 elelmentos. Caso exista um terceiro param, ele subistuirá 
 os itens removidos no segundo parâmetro.*/
novosJogos.splice(
  0,
  3,
  "Shadow Of the Colossus",
  "God of War - Ragnarok",
  "Zelda - A Ocarina Of Time"
);
console.log(novosJogos);

console.log(novosJogos[0]);
