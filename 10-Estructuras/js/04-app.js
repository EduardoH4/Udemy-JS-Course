//ELSE IF

const dinero = 300;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
    console.log('Si puedo pagar');          
} else if (tarjeta) {
    console.log('Tengo la tarjeta');
} else if (cheque) {
    console.log('Tengo cheque'); 
} else {
    console.log('No puedo pagar');
}