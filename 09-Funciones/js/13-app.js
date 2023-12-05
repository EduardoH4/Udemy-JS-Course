
const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo la cancion con el Id: ${id} `),
    pausar: () => console.log(`Pausando... `),
    borrar: id => console.log(`Borrar la cancion con el ID: ${id}`),
    crearPlayList: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la playlist de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(this.cancion);
    }
}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');