//COMO SE COMUNICAN LAS FUNCIONES

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App');       
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Melvin');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando Usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}