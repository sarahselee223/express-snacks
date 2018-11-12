const snackModel = require('../models/snacks')


function readAll (req, res, next){
    const snacks = snackModel.getAll()

    res.send(snacks)
}

function readOne (req, res, next){
    const snack = snackModel.getOne(req.params.snackid)
    
    res.send(snack)
}

function createOne (req, res, next){
    const newSnack = snackModel.createOne(req.body.name, req.body.available, req.body.rate)
    if(newSnack.error) return next ( {status:400, message: newSnack} )
    res.send(newSnack)
}

function editOne (req, res, next){
    const id = req.params.snackid
    const snack = snackModel.editOne(id, req.body.name, req.body.available, req.body.rate)

    res.send(snack)
}

function deleteOne (req, res, next){
    const id = req.params.snackid
    const deleteSnack = snackModel.deleteOne(id)

    res.send(deleteSnack)
}

module.exports = {readAll, readOne, createOne, editOne, deleteOne}