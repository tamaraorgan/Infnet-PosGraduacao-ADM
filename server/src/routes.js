const express = require('express')
const routes = express.Router()

const registerController = require('./controllers/register.controller')
const employeeController = require('./controllers/employee.controller')

routes.get('/stacks', registerController.index)
routes.post('/stacks', registerController.create)

routes.get('/stacks/:stack_id/stacks', employeeController.index)
routes.post('/stacks/:stack_id/stacks', employeeController.create)
routes.delete('/stacks/:id', employeeController.delete)


module.exports = routes
