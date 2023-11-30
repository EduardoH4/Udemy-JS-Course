const producto = "Monitor de 24 Pulgadas";

//REPLACE -> Remplazar algun valor de una cadena de texto
console.log(producto.replace("Monitor", "Monitor Curvo"));

// la diferencia es: si SUBSTRING se le manda el primer parámetro mayor al segundo el método los cambia y muestra el resultado y SLICE no muestra nada en este caso.  
//SLICE -> Extrae una seccion de una cadena de texto
console.log(producto.slice(0,8));

//SUBSTRING -> Tambien extrae una seccion de una cadena de texto
console.log(producto.substring(0,8));

//CHARAT -> Extrae unicamente 1 caracter de una cadena de texto
console.log(producto.charAt(0));