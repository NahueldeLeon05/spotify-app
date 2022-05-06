import 'dotenv/config'
import request from 'request'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

// Genero nuevas credenciales de spotify (https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/)
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body)
  }
})
