const numero1 = 5;
const numero2 = 3
const numero3 = "3";

//Operadores de Comparación de Igualdad
console.log(numero2 == numero1) // false
console.log(numero2 == numero3) // true

//Operadores de Comparación Estrictamente Igualdad
console.log(numero2 === numero1) // false
console.log(numero2 === numero3) // false
console.log(numero2 === parseInt(numero3)) // true

//Operador de Desigualdad
const password1 = "Admin";
const password2 = "admin";

console.log(password1 != password2) // false

//Operador Desigualdad Estricta
console.log(numero2 !== numero3) // true