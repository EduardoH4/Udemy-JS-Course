//Existen 2 manera de unir objetos, Object.assign() y la que es mas utilizada Spread Operator o Rest Operator.

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 2000,
    disponible: true,
 };
 
 const medidas = {
    peso: '1kg',
    medida: '1m'
 }
 
 //UTILIZANDO OBJECT.ASSIGN()
 const resultado = Object.assign(producto, medidas);
 console.log(resultado);

 //LA MAS UTILIZADA  SPREAD OPERATOR O REST OPERATOR
 const resultado2 = {...producto, ...medidas}; // SPREAD OPERATOR
 console.log(resultado2);

 
 /* Ambas Imprimen los siguiente: 
 {
   nombre: 'Monitor de 20 pulgadas',
   precio: 2000,
   disponible: true,
   peso: '1kg',
   medida: '1m'
 }
 */