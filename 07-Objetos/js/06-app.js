
 //Destructuracion de Objetos Anidados

let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true,
    informacion: {
       medidas: {
          peso: '1kg',
          medida: '1m'
       },
       fabricacion:{
          pais: 'Guatemala'
       }
    }
 };
 

 //Destructuracion de Objetos Anidados

 const {nombre, informacion, informacion:{fabricacion, fabricacion:{pais}}} = producto;

 console.log(informacion);
 console.log(fabricacion);
 console.log(pais);