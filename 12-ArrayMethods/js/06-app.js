//ARRAY METHOD --> .every()
//Determina si todos los elementos en el array cumplen la condición para retornar un TRUE si no retorna FALSE  

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every(producto => {
    return producto.precio === 1000;
})
console.log(resultado); //false