function greeting(name) {
  name = "Jeff";
  console.log("Olá " + name);
}

function processUserInput(callback) {
  var name = console.log("Bati aqui");
  callback(name);
}

processUserInput(greeting);

function func1(function_parameter){
    function_parameter();
  }
  
  function func2(){
    console.log("okay!");
  }
  
  func1(func2);
