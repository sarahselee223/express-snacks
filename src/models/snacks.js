const fs = require('fs')
const path = require('path')
const shortId = require('shortid')
const snacksFilePath = path.join(__dirname, '../../db/snacks.js')


function getAll(){
   
    return JSON.parse(fs.readFileSync(snacksFilePath), 'utf-8')
}

function getOne(snackId){
    const snacks = JSON.parse(fs.readFileSync(snacksFilePath), 'utf-8')
    const snack = snacks.find(ele => ele.id === snackId)

    if(!snack){
        return { error: ['Snack not found'] }
    }
    return snack
}

function createOne(name, available, rate){
    const error = []
    const snacks = JSON.parse(fs.readFileSync(snacksFilePath), 'utf-8')
    if(!name) {
        error.push('Please provide name of snack')
    }
    if(typeof available !== "boolean"){
        error.push('availability should be boolean')
    }
    if(error.length) return { error }

    const newSnack = {
        id: shortId.generate(),
        name,
        available,
        rate
    }
    snacks.push(newSnack)
    fs.writeFileSync(snacksFilePath, JSON.stringify(snacks, null, 2), 'utf-8')
    return snacks
}

function editOne(id, name, available, rate){
    const error = []
    const snacks = JSON.parse(fs.readFileSync(snacksFilePath), 'utf-8')
    const snack = snacks.find(ele => ele.id === id)
    if(!name) {
        error.push('Please provide name, availability and rate of snack')
    } else if (typeof available !== "boolean"){
        error.push('availability should be boolean')
    } 
    if(error.length) return { error }
   
    snack.name = name
    snack.available = available
    snack.rate = rate

    fs.writeFileSync(snacksFilePath, JSON.stringify(snacks, null, 2), 'utf-8')
    return snack
}
function deleteOne(id){
    const error = []
    const snacks = JSON.parse(fs.readFileSync(snacksFilePath), 'utf-8')
    const snackIdx = snacks.findIndex(ele => ele.id === id)
    if(snackIdx === -1) {
        error.push('snack not found')
    } 
    if(error.length) return { error }
    const snack = snacks[snackIdx]
    snacks.splice(snackIdx, 1)
    fs.writeFileSync(snacksFilePath, JSON.stringify(snacks, null, 2), 'utf-8')
    return snack
}

module.exports = {getAll, getOne, createOne, editOne, deleteOne}