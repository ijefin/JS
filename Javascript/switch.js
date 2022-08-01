const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra');
    }
}

imprimirResultado(10)

const frutas = 'Mamões';
switch (frutas) {
  case 'Laranjas':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mamões':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${frutas}.`);
}