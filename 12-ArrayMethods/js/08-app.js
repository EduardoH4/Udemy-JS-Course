const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//SPREAD OPERATOR com arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

//OBJETOS A AGREGAR A ARREGLO CARRITO
const producto1 = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Mouse",
    precio: 400
}

//SPREAD OPERATOR con objetos 
const resultado = [...carrito, producto1, producto2]; //creo que a producto 1,2 no se les pone "..." porque se busca agregar objetos al arreglo.

console.log(resultado);