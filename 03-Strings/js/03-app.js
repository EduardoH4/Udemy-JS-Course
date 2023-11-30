const producto = "Monitor de 20 Pulgadas";
const precio   = "30 USD";

//CONCATENAR CON TAMPLATE STRINGS/LITERALS -> es lo mas recomendado y usado.
console.log(`El ${producto} tiene un precio de $${precio}`);

//CONCATENACION MAS COMUN
console.log("El " + producto + " tiene un precio de $" + precio);

//METODO CONCAT
console.log(producto.concat(precio));