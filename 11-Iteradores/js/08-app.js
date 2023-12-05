//For…In funciona para recorrer Objetos

const carros = {
    marca: "Mazda",
    precio: 1000
  };
  
   for (const propiedad in carros) {
      console.log(carros[propiedad]);
    }
 

//UNA MANERA MEJOR PARA RECORRER OBJETOS
const cars = {
  marca: "Mazda",
  precio: 1000
};

 for (const [llave, valor] of Object.entries(cars)) {
    console.log(`${llave}: ${valor}`);
  }
