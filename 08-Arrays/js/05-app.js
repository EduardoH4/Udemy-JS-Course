//AÑADIR ELEMENTOS A UN ARRAY -> simulamos un carrito de compras en linea

const carrito = [];

const producto1 = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 400
}

const producto3 = {
    nombre: "Teclado",
    precio: 400
}

//AGREGAR ELEMENTOS AL FINAL DE UN ARRAY
carrito.push(producto1);
carrito.push(producto2);

//AGREGAR ELEMENTOS AL PRINCIPIO DE UN ARRAY
carrito.unshift(producto3);


console.table(carrito); // 