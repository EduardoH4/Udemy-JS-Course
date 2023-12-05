//Recorriendo un Array con Objetos como elementos.
const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Teclado", precio: 200},
    {nombre: "Mouse", precio: 300},
    {nombre: "Celular", precio: 400},
    {nombre: "Audifonos", precio: 500},
];

//Map() =>  retorna el array
const nuevoArray = carrito.map( producto => `El ${producto.nombre} tiene un precio de ${producto.precio}`);

//ForEach() => No retorna nada
carrito.forEach( producto => console.log(`El ${producto.nombre} tiene un precio de ${producto.precio}`));


console.log(nuevoArray); // retorna el array
