// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Convertir de Strings a Números flotantes o Enteros

console.log(Number.parseInt(numero1)); // Convertir de String a Número
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero3));   // Retorna "NaN", quiere decir que no es un numero 

// Revisar si un número es entero, retorna TRUE o FALSE
console.log(Number.isInteger(numero4) ); // TRUE
console.log(Number.isInteger(numero3) ); // FALSE

// Convertir numero a String
console.log(numero4.toString());