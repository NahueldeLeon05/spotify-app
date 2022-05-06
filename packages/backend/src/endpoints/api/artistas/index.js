function ArtistasEndPoints (Ruta) {
// Realizo GET del artista con un query
  Ruta.get('/artista', (req, res) => {
    const query = req.query.q
    // Buscar artista en API spotify
    // Devuelvo un status 200 (OK)
    res.status(200).json({ query })
  })
}

// Exporto para utilizarlo en apiEndpoints.js
export default ArtistasEndPoints
