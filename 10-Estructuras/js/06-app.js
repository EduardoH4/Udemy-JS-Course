
const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {  
    console.log('Puede Comprar');              
} else if (!puedePagar && !usuario) {    //! -> Indica si no es usuario o si no puede pagar 
    console.log('No Puede Comprar');
} else if (!usuario) {
    console.log('Inicia sesion o saca una cuenta ');
} else if (!puedePagar) {
    console.log('Fondos Insuficientes');
}