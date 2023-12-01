"use strict"
//Para lograr que un objeto se comporte como una constantes, es decir, que no se pueda modificar. 
//se activa el modo estricto "use strict" y ya se pueden usar los metodos que se muestran a continuacon. 

const producto = {
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

//Congela un objeto, es decir: impide que se le agreguen, eliminen, y modifiquen propiedades
Object.freeze(producto);

producto.nombre = 'Samsung de 10 Pulgadas';
console.log(producto); // TypeError: Cannot assign to read only property 'nombre' of object '#<Object>'

//ESTE METODO TE DICE SI ALGUN OBJETO ESTA CONGELADO
console.log(Object.isFrozen(producto)); // true 