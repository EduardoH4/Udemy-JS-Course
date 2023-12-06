//Array Method -> .findIndex() -> Permite saber en que indice del Array se encuentra un Elemento.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar en que indice se encuentra un elemento dentro del arreglo con un FOR y no con un ARRAY METHODS
meses.forEach( (mes, indice) => {
    if (mes == 'Abril') {
        console.log(`Abril esta en la posicion ${indice}`);
    }
});

//Array Method --> .findIndex() --> 
const resultado2 = carrito.findIndex( producto => {
    return producto.nombre === 'Teclado';
})

console.log(resultado2);

//Array Method --> .findIndex() 
const resultado = meses.findIndex( mes => {
    return mes === 'Abril';
});

console.log(resultado);
