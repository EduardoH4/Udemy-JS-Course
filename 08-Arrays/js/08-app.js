const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

//DESTRUCTURACION 
const [ , , , cuarto] = meses; // Si deseas solo el elemento de la cuarta posicion, dejas en blanco las primeras posiciones


//Extraer los primeros elementos y que todos los elementos restantes queden en un propio Array.
const [primero, segundo, ...tercero] = meses; 


console.log(tercero);//[ 'Marzo', 'Abril', 'Mayo', 'Junio' ]