console.log("==========Aula 01==========")
const idade = 21

console.log(`a idade + 2 resulta em ${idade + 2}`)
console.log(idade - 2)
console.log(idade * 2)
console.log(idade - 2)
console.log(idade / 2)
console.log(idade ** 2)
console.log(idade % 2)

console.log("==========Aula 02==========")

console.log("Trabalhando com a declaração de variáveis!")
//Prestar bastante atenção nas maiúsculas e minúsculas.
//JS é case sensitive


var idadeN = 21 //var é de escopo global, podendo ser acessada em todo o código.
let anos = idade + idade //let pode ser utilizada somente no bloco de código em que é declarada, e pode ter valores reatribuidos
const tempoDeVida = idade + idade + idade //const é constante, e não pode ter valores reatribuídos.

console.log(idadeN)
console.log(anos)
console.log(tempoDeVida)

console.log("==========Aula 03==========")
console.log("Operações matemáticas!")

console.log(2 + 2)
console.log(2 + 2 * 2)
console.log((2 + 2) * 2)

console.log("==========Aula 04==========")
console.log("Conversão de tipos!")
console.log(parseInt('2') + parseInt('2'))
console.log('10' / '2')
console.log('10' * '2')
console.log('10' - '2')
console.log('jefferson' / '2')
console.log(parseFloat('2.1') + parseFloat('2.9'))


console.log("==========Aula 05==========")
console.log("Trabalhando com listas!")

//Sempre que formos trabalhar com inúmeros dados, em formato de lista, é ideal que utilizemos uma Array

const listaDeDestinos = new Array(

    `São Paulo`,
    `Salvador`,
    `Belo Horizonte`,
    `Rio de Janeiro`,
    `Espirito Santo`,

)

listaDeDestinos.push(`Paraná`) //Adiciona itens ao final da lista.

console.log(listaDeDestinos)

listaDeDestinos.splice(0, 1) // Remove itens da lista (Primeiro selecionamos o índice, e depois a quantidade: (x,x))

console.log(listaDeDestinos)
console.log(listaDeDestinos[2]) //Seleciona apenas um item da lista, dando seu índice dentro dos colchetes: [x])


console.log("==========Aula 06==========")
console.log("Condicionais!")

const skateShop = new Array(

    `trucks`,
    `rodinhas`,
    `rolamentos`,
    `shapes`,
    `lixas`,
)
console.log(skateShop)
let estaAcompanhada = 'sim'
let jefinIdade = 17
if (jefinIdade >= 18 || estaAcompanhada == 'sim') {
    console.log(`jefin comprou ${skateShop[0]}.`)
    skateShop.splice(0, 1)
} else {

    console.log("Jefin não tem idade para essas coisas..")
}

console.log(skateShop)


console.log("==========Aula 07==========")
console.log("Loopings!")
const musicShop = new Array(

    `Violão Gianini GSM-MG 295 Jumbo MD-Folk`,
    `Guitarra`,
    `Bateria`,
    `violino`,
)
console.log(musicShop)

let = querAprender = 'sim'
let = notasEscolares = 20
let media = 20
let instrumento = musicShop[0]
let produtoExiste = false

if (querAprender == 'sim' && notasEscolares >= media) {
    verificador = 0
    
while(verificador < 4){
    if (musicShop[verificador] == instrumento){
        console.log(`Instrumento disponível!\nVocê comprou ${musicShop[0]}`)
        
        
    }else{
        console.log("Instrumento indisponível!")
    }
  
    verificador += 1
    break

}

}
else {
    console.log("Você terá que estudar um pouco mais..")
}

console.log("==========Aula 08==========")
console.log("Laço for!")


let minecraftItens = new Array(
    'Diamond Sword',
    'Diamond Set full',
    'Diamond Pickaxe',
    'Diamond Axe',
    'Potions Of Life',
    'Ender Pearl',
)

let jogaMinecraft = 'sim'
let possuiIdade = 18 
podematar = false

for (let contador = 0 ; contador < 6 ; contador++ ){
    if (minecraftItens[contador] == 'Ender Pearl'){
        console.log("UAl! Você está potente!")
    } else {
        console.log("Procure um pouco mais.")
    }
}

