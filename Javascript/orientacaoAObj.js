//Introdução a OO em JS.

//1 Objeto é uma coleção dinamica de pares CHAVE: VALOR

const produto = new Object();

//object é uma função, ao usar uma função com o new, obtemos uma função construtora que instancia um objeto.
//Podemos atribuir um novo objeto chave:valor com notação ponto:
produto.nome = "Cadeira";

//e também como um array, sendo o que está dentro do array a chave
produto["Marca do produto"] = "Generica";
produto.preco = 220;
produto.dataDeRecebimento = new Date();

console.log(produto);
