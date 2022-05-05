const express = require('express')
const rutasApiEndpoints = require("./api/rutasApiEndpoints")

function setearServerEndpoints(app){
    //Creacion de rutas
    const apiRuta=express.Router()

    //Le dejo la ruta
    app.use('/api',apiRuta)

    //Rutas de la api
    rutasApiEndpoints(app)
}


//Exporto el modulo para usarlo en "apiEndpoints.js"
module.exports = ServerEndpoints