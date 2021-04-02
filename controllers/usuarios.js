const { response } = require('express');



const usuarioGet = (req, res=response)=> {

    const {q = "Sin mensaje",nombre, apikey, page = 1, limit} = req.query;
    // se destructura el url como este 
    // localhost:8080/api/usuarios/?nombre=Federico&apikey=22356485&limit=10&page=5
    // y se le puede poner valores por defecto en caso de que no se envie


    res.json({
        msg: 'get API - Controlador' ,
        q,
        nombre,
        apikey,
        limit,
        page
    });
}


const usuarioPost = (req, res= response)=> {

    const {nombre, edad} = req.body;   //se destructura el body, solo captura el nombre y la edad



    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuarioPut = (req, res=response)=> {

    const {id}=req.params;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuarioDelete = (req, res=response)=> {
    res.json({
        msg: 'delete API - Controlador'
    });
}


module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete

}