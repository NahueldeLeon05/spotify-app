const express = require('express')
const ServerEndpoints = require ("./endpoints/index")


//Inicializo variable con express
const app = express()

//Defino constantes y puerto
const port = process.env.PORT || 3000




//Definicion de Middlewares




//Rutas
ServerEndpoints(app)


//Servidor escuchando en: 
app.listen(port, () =>{
  console.log(`Server listening on http://localhost:${port}`)
})