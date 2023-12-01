//UNDEFINED -> La variable existe en el programa (esta declarada), pero que no tiene valor o no esta inicializada.

let numero;
console.log(numero); // UNDEFINED
console.log(typeof numero); //UNDEFINED

//NULL -> La variable si tiene un valor y ese valor es nulo o vacio.

let numero2 = null;
console.log(numero2); //NULL
console.log(typeof numero2); //OBJECT -> JavaScript se comporta raro por eso retorna que NULL es de ese tipo Object

//Al comparar UNDEFINED con NULL retorna que es verdadero por el raro comportamiento de JS a veces, por eso 
//se recomienta comparar con IGUALDAD ESTRICTA.
console.log(numero === numero2); //false

