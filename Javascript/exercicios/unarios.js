let num = 1
let num2 = 2

num++
console.log(num);
--num2
console.log(num2);

//num é incrementado antes mesmo da comparação, logo o resultado é true
console.log(++num === num2--)