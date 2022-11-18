const response = require('express')
const encuesta = require('../models/encuesta')
const Encuesta = require('../models/encuesta')

const getEncuesta = async (req, res = response) =>{
  const encuesta= await Encuesta.find()//Consultar todos los documentos de una collection
   res.json({
    msg: 'GET API Encuesta',
    encuesta

   })


}

const postEncuesta = async (req, res ) => {
    //Recibir parametros y desestructuracion
  const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body

  //instaciar el objeto con los aprametros recibidos 
  const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero,  empleado})

  //Guardar los datos en la base de datos
  await encuesta.save()


  res.json({
    msg: 'POST API  Encuesta',
    nombreEncuesta,
    fecha,
    documentoEncuestado,
    nombreEncuestado,
    edad,
    genero,
    empleado

   })

}

const deleteEncuesta = async(req, res) => {
  //Eliminado Fisico
  const{documentoEncuestado} = req.query   //Desestructuracion 
  //parametro
  //despues de los puntos son varible lo que se va a cambiar

  const encuesta = await Encuesta.findOneAndDelete({documentoEncuestado : documentoEncuestado})

  res.json({
    msg: 'Delete Api Encuesta',
    encuesta
  })
}

const putEncuesta= async(req, res) =>{
  //Desestructuracion
  const {nombreEncuesta, nombreEncuestaNuevo, fecha, nombreEncuestado, edad, genero, empleado } = req.body
  const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {nombreEncuesta: nombreEncuestaNuevo, fecha : fecha, nombreEncuestado : nombreEncuestado, edad : edad, genero : genero, empleado: empleado })

  res.json({
    mesg: 'Put Api Encuesta',
    encuesta
  })

}

const patchEncuesta = async(req, res) =>{
  const {nombreEncuesta, nombreEncuestado, nombreNuevo} = req.body
  const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {nombreEncuestado: nombreNuevo})

  res.json({
    mesg: 'Patch Api Encuesta',
    encuesta
  })
}


module.exports ={
    getEncuesta,
    postEncuesta,
    deleteEncuesta,
    putEncuesta,
    patchEncuesta
}
