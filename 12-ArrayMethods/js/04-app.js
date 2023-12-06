//ARRAY METHOD -> .filter() --> Crea un nuevo array con todos los elementos que cumplan la condición de el parámetro que es evaluado. 
//Es el que mas se utiliza.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


let resultado;

//Nuevo arra con elementos mayor a 400
resultado = carrito.filter((producto) => {
    return producto.precio > 400;
})

//Nuevo arra con elementos menor a 600
resultado = carrito.filter((producto) => {
    return producto.precio < 600;
})

//Nuevo arra con elementos que no contiene audifonos
resultado = carrito.filter((producto) => {
    return producto.nombre !== 'Audifonos';
})

//Nuevo arra con elementos que contiene, audifonos
resultado = carrito.filter((producto) => {
    return producto.nombre === 'Audifonos';
})


console.log(resultado);