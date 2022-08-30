const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  print(a) {
    return console.log(a);
  },
};

const { print } = obj;
obj.print("Olá mundo");

print("Olá mundo");

//json stringifi converte um obj para Json
console.log(JSON.stringify(obj));
const json = JSON.stringify(obj);

// json parse converte um json para objeto
console.log(JSON.parse(json));
