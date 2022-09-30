const sequencia = {
  _valor: 1, //convenção privada
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

let i = 1;
while (i <= 10) {
  console.log(sequencia.valor);
  i++;
}

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

// The following example defines a class called Person:
class Person {
  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    newName = newName.trim(); //trim remove os espaços em branco do final da string
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

let person = new Person("Jane Doe");
console.log(person); // Jane Doe

person.setName("Jane Smith");
console.log(person.getName()); // Jane Smith

//Em um obj literal
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("John").add("Jane").add("Peter");
console.log(`The latest attendee is ${meeting.latest}.`);
