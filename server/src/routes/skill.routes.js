const express = require('express')

const skillsControllers = require('../controllers/skills.controllers')

const routes = express.Router()

routes.get('/:team_id/skills', skillsControllers.index)
routes.post('/:team_id/skills', skillsControllers.create)
routes.delete('/skills/:id', skillsControllers.delete)


module.exports = routes