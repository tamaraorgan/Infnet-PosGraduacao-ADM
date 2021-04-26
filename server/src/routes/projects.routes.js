const express = require('express')

const projectController = require('../controllers/projects.controllers')

const routes = express.Router()

routes.get('/:stack_id/projects', projectController.index)
routes.post('/:stack_id/projects', projectController.create)
//routes.put('/teams/:id', projectController.update)
routes.delete('/projects/:id', projectController.delete)

module.exports = routes