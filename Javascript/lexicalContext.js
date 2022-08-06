const valor = "Global";

function myFunction() {
  console.log(valor);
}
myFunction();

function exec() {
  const valor = "Local";
  myFunction();
}
exec();

/*
Por causa do contexto léxico ( contexto no qual a função foi escrita), a função encontrará o valor global,
a informação ja definida na função é mantida até o final por conta do contexto léxico
O dado será sempre buscado no escopo no qual a função foi definida
*/
