const express = require('express')

const teamController = require('../controllers/team.controllers')

const routes = express.Router()

routes.get('/:stack_id/teams', teamController.index)
routes.post('/:stack_id/teams', teamController.create)
routes.put('/teams/:id', teamController.update)
routes.delete('/teams/:id', teamController.delete)

module.exports = routes