const ArtistasEndpoints = require ('./artistas/index')
const AlbumsEndpoints = require ('./albums/index')


function apiEndpoints(Ruta){

    //Defino los Endpoints de ambos
    artistasEndpoints(Ruta)
    AlbumsEndpoints(Ruta)
}

module.exports = apiEndpoints