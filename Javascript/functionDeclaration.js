//function declaration: função declararada explicitamente
olaMundo();
/*
quando eu declaro a função dessa forma, eu consigo acessá-la mesmo antes de ela ser declarada

     ***O INTERPRETADOR DE JAVASCRIPT CARREGA TODAS AS FUNÇÕES ANTES DE EXECUTAR O CÓDIGO*** 
*/

function olaMundo() {
  return console.log(`Olá mundo`);
}
olaMundo();

// function expression: função declarada em uma variável

/*
 Em uma function expression, a função só pode ser chamada depois da sua declaração. 

*/

const olaPessoa = function (pessoa = "Jefferson Lucas") {
  console.log(`Olá ${pessoa}`);
};

olaPessoa("Pedro carlos");

//named function expression:

/*
 O mesmo ocorre em uma named function expression 
 Em uma named function expression, a função só pode ser chamada depois da sua declaração. 

*/
const boasVindas = function boasVindas(
  pessoa = `Mano sem nome`,
  saudacao = `ce é foda meu parceiro`
) {
  return console.log(`${pessoa}, ${saudacao}`);
};

boasVindas();
