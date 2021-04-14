const express = require('express')

const userController = require('../controllers/user.controllers')

const routes = express.Router()

routes.get('/', userController.index)
routes.post('/', userController.create)
routes.delete('/:id', userController.delete)
routes.put('/:id', userController.update)
routes.get('/:email', userController.indexByName)

module.exports = routes