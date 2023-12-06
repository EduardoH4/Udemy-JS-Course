//Array Method -> .reduce() -> ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con ForEach
let total = 0;
carrito.forEach(producto => {
    total += producto.precio;
});
console.log(total);


//Array Method --> .reduce() 
const resultado = carrito.reduce( (total, producto) => {
    return total + producto.precio;
},0); //valor inicial

console.log(resultado);