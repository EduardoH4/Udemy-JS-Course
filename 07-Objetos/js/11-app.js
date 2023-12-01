//Palabra reservada THIS dentro de un Objecto 
//se utilza para referirse a las propiedades del mismo objeto.

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El ${this.nombre} tiene un precio de Q${this.precio}`);
    }
 };

producto.mostrarInfo();