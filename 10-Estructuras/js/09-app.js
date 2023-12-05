const autenticado = true;
const puedePagar = false; 

//Operador Ternario 
console.log( autenticado ? 'Si puede pagar' : 'No no puede pagar');


//Operador Ternario  con Operador && y Operador OR ||
console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No no puede pagar');

//Operador Ternario Anidados
console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No no esta autenticado');