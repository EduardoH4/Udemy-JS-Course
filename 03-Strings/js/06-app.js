const producto = "Monitor de 24 Pulgadas";

//REPEAT -> Permite repedir una cadena de Texto, enviándole como parámetro la cantidad de veces a repetir,
const texto = " en promoción".repeat(3);
console.log(`${producto} ${texto}`);

//SPLIT -> Retorna un Array y separa cada palabra del string por el carácter que se use como parámetro 
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" ")); // lo esta dividiendo solo por un espacio y se ve en el array. 

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));