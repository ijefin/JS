const a = 1;
const b = 2;
const c = 3;

//antes de ES6, utilizavamos essa duplicidade
const obj1 = { a: a, b: b, c: c };
console.log(obj1);

//ECS6 não é mais necessário, caso o atributo vá receber ele mesmo.
const obj2 = { a, b, c };
console.log(obj2);

//dar valor a um atributo a partir de variáveis
const nomeAttr = "nota";
const valorAttr = 7.87;

// então declaramos ao objeto criado, o atributo com par chave [em colchetes], e valor em seguida =
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttrl]: valorAttr };
console.log(obj4);

const obj5 = {
  //function expression
  funcao1: function () {
    // args
  },

  //ecs6
  funcao() {
    //args
  },
};
