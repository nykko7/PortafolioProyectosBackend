'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conexión a la BD establecida con éxito...");

        //Creacion del servidor:
        app.listen(port, () => {
            console.log('Servidor Corriendo correctamente en la url: Localhost:3700');
        })
    })
    .catch(err => console.log(err));