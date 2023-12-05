//DIFERENCIAS ENTRE DECLARACION Y EXPRESION DE FUNCION
//La funcion Declaracion si se puede ejecutar al mandarla a llamar antes de su cracion.
//La funcion Expresion no se ejecuta al mandarla a llamar antes de su creacion. 
//Esto es por el Hosting o Elevación en JavaScript. 



//En la primera fase de Declaracio de JS crea las variables y funciones
//En la segunda fase de Ejecucion al invocar la funcion esta ya se encuentra creada por eso si se puede.

//Declaración de Función 
suma(); //invocacion

function suma(){
    console.log(2+2);
}

//En la primera fase de Declaracio de JS crea las variables y funciones
//En la segunda fase de Ejecucion al invocar la funcion y esta estar asignada a una variables, 
//reconoce la variable y no la funcion como tal, por eso muestra un error.

//Expresion de Funcion
suma2(); //invocacion

var suma2 = function(){
    console.log(3+3);
};
