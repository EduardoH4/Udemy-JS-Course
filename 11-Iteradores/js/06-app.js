//ForEach();
//El método forEach() es el ideal para recorrer arreglos, ejecuta una función de flecha proporcionada, una vez para cada elemento de la matriz, es decir si el arreglo tiene 20 elementos se ejecuta 20 veces. 
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((elemento, indice) => { //Funcion de Fecha. (Arrow Function)
  console.log(`${indice}: ${elemento}`);
});

//El método .map() su funcionalidad y sintaxis es la misma que forEach() con la diferencia que crea un nuevo Array.let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

 pendientes.map((elemento, indice) => {
    console.log(`${indice}: ${elemento}`);
 });

