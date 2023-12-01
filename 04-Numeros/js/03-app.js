//EL OBJETO MATH
//Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actúan de forma algo extraña

let resultado; 

// Pi
resultado = Math.PI;
// redondeo -> lo aproxima segun el decimal.
resultado = Math.round(2.5); // 3
// redondeo abajo (floor) o arriba (ceil), sea cual sea el decimal. 
resultado = Math.ceil(2.2); // 3
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto, el valor ABSOLUTO es 300 ignora el "-" negativo.
resultado = Math.abs(-300);
// Potencia "8 a la potencia de 3"
resultado = Math.pow(8, 3); //512
// Minimo -> muestra el numero minimo de los que estan en el parametro. 
resultado = Math.min(3,5,1,2,9,4,2, -3);
// Maximo -> muestra el numero maximo de los que estan en el parametro.
resultado = Math.max(4,1,21,4,15,5,11,5);
// Aleatorio -> pocas veces da numero enteros.
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );


console.log(resultado);