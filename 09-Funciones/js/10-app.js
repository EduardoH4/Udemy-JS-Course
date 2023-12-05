//Funcion Normal
const aprendiendo = function () {
    console.log('Aprendiendo JavaScript');
}

//Arrow Function 
const aprendiendo2 = () => {
    console.log('Aprendiendo Arrow Function / Funciones de Flecha');
}

//Arrow Function en una sola linea 
const aprendiendo3 = () => console.log('Arrow Function en una sola linea');

//Arrow Function da por Implicito el return si esta en una sola linea 
const aprendiendo4 = () => 'Arrow Function, return implicito'

aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());