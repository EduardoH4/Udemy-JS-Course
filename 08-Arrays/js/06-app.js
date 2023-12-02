//CREAR UN NUEVO ARREGLO CON EL SPREAD OPERATOR 

const carrito = [];

const producto1 = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 400
}

const producto3 = {
    nombre: "Teclado",
    precio: 400
}


//SPREAD OPERATOR
const resultado = [...carrito, producto1, producto2, producto3]; //creo que a producto 1,2,3 no se les pone "..." porque se busca agregar esos elementos y no hacer una copia como en el del ARRAY. 

console.log(resultado);