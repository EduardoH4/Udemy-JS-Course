//BUENAS PRACTICAS A LA HORA DE USAR UN BOOLEAN
const autenticado = true;

//una buena practica es si la variable a evaluar es true o false, en esta parte ya no se compara solo se escribe el nombre de la variable.
if (autenticado) { 
    console.log("Si esta autenticado");      
} else {
    console.log("No esta autenticado");    
}

//otra buena practica es usar OPERADOR TERNARIO 
console.log(autenticado ? "Si esta autenticado" : "No esta autenticado");