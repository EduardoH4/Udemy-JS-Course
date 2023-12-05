//Detener la ejecucion de un IF con una FUNCION 

const puntaje = 400;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('FELICIDADES...');
        return;
    };
    
    if (puntaje > 300) {
        console.log('Buen Puntaje, Felicidades');
        return;
    }
}


revisarPuntaje();