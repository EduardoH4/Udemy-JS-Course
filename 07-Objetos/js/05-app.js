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
 
 console.log(producto.informacion.fabricacion.pais); //Guatemala