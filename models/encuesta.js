const {Schema, model} = require('mongoose')
//schema signifa esquema de la db
const EncuestasSchema = Schema({
    
    nombreEncuesta:{
        type: String
    },

    fecha:{
        type: String
    },

    documentoEncuestado:{
        type: Number
    },

    nombreEncuestado:{
        type: String
    },

    edad:{
        type: Number
    },

    genero:{
        type: String
    },

    empleado:{
        type: String
    }
})

module.exports = model('Encuesta', EncuestasSchema)