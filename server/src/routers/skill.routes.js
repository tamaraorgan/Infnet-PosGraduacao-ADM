const express = require('express')
const routes = express.Router()

const skillController = require('../controllers/skill.controller')



routes.get('/:register_id/skills', skillController.index)
routes.post('/:register_id/skills', skillController.create)
routes.delete('/:id', skillController.delete)


module.exports = routes