//ARRAY METHOD --> .CONCAT()

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio',];
const meses2 = ['Agosto','Septiembre'];
const meses3 = ['Octubre','Noviembre','Diciembre'];

//UNIR DOS O MAS ARRAYS CON CONCAT()
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

//UNIR DOS O MAS ARRAYS CON SPREAD OPERATOD
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);