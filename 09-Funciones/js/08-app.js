//EJEMPLO DE RETORNAR UN VALOR CON FUNCIONES 

let total = 0;

function agregarCarrito(precio) {
   return total += precio;
}

function calcularImpuesto() {
    return total * 1.15; //1.15 es el  15%
}

total = agregarCarrito(100);
total = agregarCarrito(100);
total = agregarCarrito(100);

let totalPagar = calcularImpuesto();
console.log(totalPagar);
