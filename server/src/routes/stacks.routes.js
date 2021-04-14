const express = require('express')

const stackController = require('../controllers/stack.controllers')

const routes = express.Router()

routes.get('/', stackController.index)
routes.post('/', stackController.create)
routes.delete('/:id', stackController.delete)
routes.put('/:id', stackController.update)
routes.get('/:stack', stackController.indexByName)

module.exports = routes