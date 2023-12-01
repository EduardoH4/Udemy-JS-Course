let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true
 };

//let nombre = producto.nombre; //ANTES SE HACIA DE ESTA FORMA.

//AHORA SE  HACE LA DESTRUCTURACION DE OBJETOS. 
 const {nombre, precio, disponible} = producto;  //DESTRUCTURACION DE OBJETOS. 

 console.log(nombre);
 console.log(precio);
 console.log(disponible);