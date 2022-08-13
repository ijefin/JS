var ensinando = document.querySelector("button");

function mostraPenis() {
  return alert("8===D");
}

function alteraCorDeFundo() {
  debugger;
  const color = "black";
  document.getElementById("daniel").style.backgroundColor = color;
  alteraCorDeFonte();
  document.getElementById("butao1").style.display = "none";
  document.getElementById("butao2").style.display = "inline-flex";
}

function alteraCorDeFonte() {
  const color = "white";
  document.getElementById("cu").style.color = color;
}

function reverso() {
  document.getElementById("daniel").style.backgroundColor = "white";
  document.getElementById("cu").style.color = "black";
  document.getElementById("butao1").style.display = "inline-flex";
  document.getElementById("butao2").style.display = "none";
}
