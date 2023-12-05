//Switch Case

const metodoPago = 'Efectivo';

switch (metodoPago) {
    case 'Efectivo':
        pagar();
        break;
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    case 'Cheque':
        console.log('Pagaste con Cheque');
        break;
    
    default:
        console.log('Metodo de pago no soportado');
        break;
}


function pagar() {
    console.log('Pagando... ');
}