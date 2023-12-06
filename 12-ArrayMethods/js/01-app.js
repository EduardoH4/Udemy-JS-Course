//Array Method -> .SOME() -> Comprueba si un valor existe dentro de un arreglo 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo con un FOR y no con un ARRAY METHODS
meses.forEach(mes => {
    if (mes === 'Febrero') {
        console.log('Este mes si existe');
    }
});

//Array Method --> includes() 
const resultado = meses.includes('Enero');
console.log(resultado); 


//Array Method --> .SOME()
const resultado2 = carrito.some( producto => {
     return producto.nombre === 'Televisión'
});
console.log(resultado2);  

//Array Method --> .SOME() 
const resultado3 = meses.some( producto => {
    return producto === 'diciembre';
});
console.log(resultado3); 