
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true,
 };

 //METODO OBJECT.KEYS()
//Retorna un Arreglo con solamente las claves de un objeto.
 console.log(Object.keys(producto));  //[ 'nombre', 'precio', 'disponible' ]

  //METODO OBJECT.VALUES()
//Retorna un Arreglo con solamente los valores de un objeto.
 console.log(Object.values(producto)); //[ 'Monitor de 20 pulgadas', 2000, true ]

  //METODO OBJECT.ENTRIES()
//Retorna un Arreglo con las propiedades de un objeto, en pares. 
  console.log(Object.entries(producto));
/*
[
  [ 'nombre', 'Monitor de 20 pulgadas' ],
  [ 'precio', 2000 ],
  [ 'disponible', true ]
]
*/
  //METODO OBJECT.ENTRIES()
  //Es tambien el Método que se utiliza para recorrer un Objeto. 

  for (const [llave, valor] of Object.entries(producto)) {
    console.log(`${llave}: ${valor}`);
  }
