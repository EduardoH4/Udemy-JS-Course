//ELIMINAR elementos de un Array

let frutas = ["Manzana", "Banana", "Pera", "Mango"];


//Eliminar el ultimo elemento del Array
frutas.pop()


//Eliminar el primer elemento del Array
frutas.shift();

//Elimina varios elementos del Array
//array.splice(indiceDondeEmpezarABorrar, CuantosBorrar);
frutas.splice(0,3); // Elimina "Manzana" 


console.log(frutas);
