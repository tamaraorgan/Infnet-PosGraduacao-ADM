const express = require('express')
const routes = express.Router()

const stackController = require('./controllers/stack.controller')
const employeeController = require('./controllers/employee.controller')

routes.get('/stacks', stackController.index)
routes.post('/stacks', stackController.create)

routes.get('/stacks/:stack_id/stacks', employeeController.index)
routes.post('/stacks/:stack_id/stacks', employeeController.create)
routes.delete('/stacks/:id', employeeController.delete)


module.exports = routes
