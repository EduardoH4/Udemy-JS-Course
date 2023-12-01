const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(typeof boolean1); //boolean
console.log(boolean1 === boolean3); //false

//otra manera de crear boolean pero retorna que es de tipo objeto 

const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);