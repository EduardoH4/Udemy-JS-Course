//Recorriendo un Array con Objetos como elementos.
const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Teclado", precio: 200},
    {nombre: "Mouse", precio: 300},
    {nombre: "Celular", precio: 400},
    {nombre: "Audifonos", precio: 500},
];

//ForEach()
carrito.forEach(function(producto, indice) {
    console.log(`${indice} El ${producto.nombre} tiene un precio de ${producto.precio}`);
});