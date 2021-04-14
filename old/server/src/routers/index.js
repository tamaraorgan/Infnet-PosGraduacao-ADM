const express = require('express')
const routes = express.Router()

const stackRoutes = require('./stack.routes')
const skillRoutes = require('./skill.routes')
const registerRoutes = require('./register.routes')
const userRoutes = require('./user.routes')

routes.use('/stacks', stackRoutes)
routes.use('/stacks', registerRoutes)
routes.use('/registers', skillRoutes)
routes.use('/users', userRoutes)

module.exports = routes
