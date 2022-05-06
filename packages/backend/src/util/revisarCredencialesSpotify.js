import axios from 'axios'

// Defino las constantes con el archivo .env

const SPOTIFY_API_URL = process.env.SPOTIFY_API_URL
const SPOTIFY_CLIENT_TOKEN = process.env.SPOTIFY_CLIENT_TOKEN
const TRACK_EJEMPLO = '2TpxZ7JUBn3uw46aR7qd6V'

// Esta funcion se encarga de checkear que el usuario haya insertado bien las credenciales de Spotify
export default async function revisarCredencialesSpotify () {
  if (!SPOTIFY_CLIENT_TOKEN) {
    throw new Error('No se ha encontrado la variable SPOTIFY_CLIENT_TOKEN en archivo .env')
  }
}

// Lanzo request a Spotify API para ver si el Token es correcto

const res = await axios({
  method: 'get',
  baseURL: SPOTIFY_API_URL,
  url: `v1/tracks/${TRACK_EJEMPLO}`,
  headers: {
    Authorization: `Bearer ${SPOTIFY_CLIENT_TOKEN}`
  }
}).catch(error => {
  throw error
})

if (res.status !== 200) {
  throw new Error('Las credenciales no son validas')
}
