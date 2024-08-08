const express = require('express');

const respuesta = require('../../red/respuestas');
const controlodor = require('./controlador');

const router = express.Router();

router.get('/', function(req, res){

    const todos = controlodor.todos()
    .then((items)=>{
        respuesta.success(req, res,items, 200)
    })

    
});

module.exports = router;