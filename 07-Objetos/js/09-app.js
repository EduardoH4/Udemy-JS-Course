"use strict"

//on el método Object.seal() no se puede eliminar ni agregar propiedades a un objeto, pero a diferencia del Object.freeze() este si puede modificar las propiedades del objeto. 

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

Object.seal(producto);

producto.nombre = 'modelo';
console.log(producto); // cambia el valor de NOMBRE

//ESTE METODO TE MUESTRA SI ALGUN OBJETO ESTA SELLADO O NO
console.log(Object.isSealed(producto)); //true