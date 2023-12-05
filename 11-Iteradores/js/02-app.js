//CREA UN FOR LOPP -> Que al detectar el numero 5 detenga su ejecucion,
//BREAK EN UN "FOR LOOP"
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`El Numero es: ${i}`);
        break
    }
    console.log(i);   // 1, 2, 3, 4, El Numero es: 5 
 }

//CONTINUE EN UN "FOR LOOP"
//El continue solo termina el iterador en donde se encuentra, pero sigue ejecutando hasta que la condicion ya no se cumpla.
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
   ]

 for (let i = 0; i < carrito.length; i++) {
     if (carrito[i].descuento) {
         console.log(`El articulo ${carrito[i].nombre} tiene DESCUENTO`);
         continue
        }
        console.log(carrito[i].nombre);  
 }

/* RESULTADO POR CONSOLA 
Monitor 27 Pulgadas
Televisión
El articulo Tablet tiene DESCUENTO
Audifonos
Teclado
Celular
*/