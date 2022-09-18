// O Índice de Massa Corporal, conhecido como IMC, é um importante indicador utilizado por médicos e nutricionistas para analisar o estado de pacientes.

function pressaoAlta(array) {
  const dadosClasseA = array.filter(
    (pacientesA) => pacientesA > 0 && pacientesA < 25
  );
  const dadosClasseB = array.filter(
    (pacientesB) => pacientesB >= 25 && pacientesB < 29
  );
  const dadosClasseC = array.filter((pacientesC) => pacientesC > 29);
  
  console.log(dadosClasseA.length, dadosClasseB.length, dadosClasseC.length);
}

pressaoAlta([12, 25, 36, 32, 14, 24]);

// Aproximadamente 16% dos pacientes com IMC menor que 25 têm pressão alta;
// Aproximadamente 31% dos pacientes com IMC entre 25 e 29 têm pressão alta;
// Aproximadamente 59% dos pacientes com IMC maior que 29 têm pressão alta.

// 12 35 23 10 21 27 28
