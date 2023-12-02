//Recorriendo un Array con Objetos como elementos.
const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Teclado", precio: 200},
    {nombre: "Mouse", precio: 300},
    {nombre: "Celular", precio: 400},
    {nombre: "Audifonos", precio: 500},
];

//ForEach()
const nuevoArray = carrito.map(function(producto, indice) {
    return `${indice} El ${producto.nombre} tiene un precio de ${producto.precio}`;
});

const nuevoArray2 = carrito.forEach(function(producto, indice) {
    return `${indice} El ${producto.nombre} tiene un precio de ${producto.precio}`;
});


console.log(nuevoArray); // retorna el array
console.log(nuevoArray2);// Undefined