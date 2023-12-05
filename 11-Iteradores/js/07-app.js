//For of 

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Teclado", precio: 200},
    {nombre: "Mouse", precio: 300},
    {nombre: "Celular", precio: 400},
    {nombre: "Audifonos", precio: 500},
];

//Recorre Arreglos de una manera mas simplificada
for (const pendiente of pendientes) {
    console.log(pendiente);
}

//Recorre Objetos

for (const producto of carrito) {
    console.log(producto.nombre);
}