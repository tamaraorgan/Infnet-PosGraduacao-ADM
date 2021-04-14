const express = require('express')
const routes = express.Router()

const stackController = require('../controllers/stack.controller')

routes.get('/', stackController.index)
routes.post('/', stackController.create)
routes.delete('/:id', stackController.delete)

module.exports = routes
