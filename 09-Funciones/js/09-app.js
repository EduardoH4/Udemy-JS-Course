
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo la cancion con el Id: ${id} `);
    },
    pausar: function () {
        console.log(`Pausando... `);
    },
    borrar: function (id) {
        console.log(`Borrar la cancion con el ID: ${id}`);
    },
    crearPlayList: function (nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlayList: function (nombre) {
        console.log(`Reproduciendo la playlist de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');