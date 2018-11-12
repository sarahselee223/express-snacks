const express = require('express')
const snacksController = require('../controllers/snacks')

const router = express.Router()

router.get('/', snacksController.readAll)
router.get('/:snackid', snacksController.readOne)
router.post('/', snacksController.createOne)
router.put('/:snackid', snacksController.editOne)
router.delete('/:snackid', snacksController.deleteOne)
module.exports = router