import express from 'express'
import apiEndpoints from './api/ApiEndpoints.js'

function setearServerEndpoints (app) {
  // Creacion de rutas
  const apiRuta = express.Router()

  // Le dejo la ruta
  app.use('/api', apiRuta)

  // Rutas de la api
  apiEndpoints(apiRuta)
}

// Exporto para usarlo en "apiEndpoints.js"
export default setearServerEndpoints
