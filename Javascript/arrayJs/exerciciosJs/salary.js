function howMuch(perHour, workedHours) {
  return console.log(`You recive per hour R$ ${perHour}. And you worked ${workedHours} this month. So you payment is R$ ${
    perHour * workedHours
  }
  `);
}

howMuch(150, 40.5);
