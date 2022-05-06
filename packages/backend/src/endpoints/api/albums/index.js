function AlbumsEndPoints (Ruta) {
  // Realizo GET de los albums del artista pasandoselo por parametro
  Ruta.get('/:artista/albums', (req, res) => {
    const idArtista = req.params.artista

    // Devuelvo un status 200 (OK)
    res.status(200).json({ idArtista })
  })
}

// Exporto para utilizarlo en apiEndpoints.js
export default AlbumsEndPoints
