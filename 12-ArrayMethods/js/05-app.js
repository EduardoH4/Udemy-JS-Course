//El método find() devuelve/busca el valor del primer elemento del array que cumple la función de prueba proporcionada.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

//Con ForeEach
carrito.forEach((producto, index) =>{
    if (producto.nombre === 'Tablet'){
        resultado = carrito [index];
    }
})
console.log(resultado);                                                     

//Con ARRAY METHOD -> .find()
resultado2 = carrito.find(producto =>{
    return producto.precio === 100;
})

console.log(resultado2);

