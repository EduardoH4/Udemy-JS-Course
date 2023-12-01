const producto = {
    nombre: "Monitor Curvo",
    precio: 300,
    disponible: true
}

//AGREGAR PROPIEDADES DEL OBJETO 
producto.imagen = "imagen.jpg";

//ELIMINAR PROPIEDADES DEL OBJETO
delete producto.disponible;

console.log(producto);