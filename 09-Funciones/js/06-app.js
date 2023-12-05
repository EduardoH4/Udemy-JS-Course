//PARAMETROS POR DEFAULT EN FUNCIONES 

function saludar(nombre = 'Desconocido', apellido = ''){ //Parametros por Default => Desconocido, "vacio no muestra nada"
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar(); //Hola Desconocido