//El "ERROR" con los objetos
//Esque que aunque esten definidos con CONST sus propiedades si pueden cambiar

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true,
 }

 //Las propiedades y metodos del objeto se pueden cambiar. 
 producto.disponible = false;
 delete producto.precio;

 console.log(producto);