import ArtistasEndpoints from './albums/index.js'
import AlbumsEndPoints from './artist/index.js'

function apiEndpoints (Ruta) {
  // Defino los Endpoints de ambos
  ArtistasEndpoints(Ruta)
  AlbumsEndPoints(Ruta)
}
export default apiEndpoints
