//FUNCON CONSTRUCTORA
function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}

//Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.
//De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.
const otroAuto = new Auto("Tesla", "Model 3", 2021)
const otroAuto2 = new Auto("Suzuki", "K-20", 2019)
const otroAuto3 = new Auto("Ferrari", "Model N", 2018)

console.log(otroAuto);
console.log(otroAuto2);
console.log(otroAuto3);