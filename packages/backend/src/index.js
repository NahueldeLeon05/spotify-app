import 'dotenv/config'
import express from 'express'
import setearServerEndpoints from './endpoints/index.js'
// Inicializo variable con express
const app = express()

// Defino constantes y puerto
const port = process.env.PORT || 3000

// Definicion de Middlewares

// Rutas
setearServerEndpoints(app)

// Servidor escuchando en:
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
