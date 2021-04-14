const express = require('express')
const routes = express.Router()

const registerController = require('../controllers/register.controller')



routes.get('/:stack_id/registers', registerController.index)
routes.post('/:stack_id/registers', registerController.create)
routes.delete('/:stack_id/registers/:id_register', registerController.delete)


module.exports = routes