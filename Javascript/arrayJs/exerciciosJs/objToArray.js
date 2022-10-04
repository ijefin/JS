//object.entries retorna um array com os elementos chave e valor que correspondem ao atributo de um obj
function objToArray(obj) {
  const finalResult = Object.entries(obj);
  return console.log(finalResult);
}

objToArray({ nome: "Jeff", idade: 23, profissao: "Programador" });
// result [ [ 'nome', 'Jeff' ], [ 'idade', 23 ], [ 'profissao', 'Programador' ] ]
    