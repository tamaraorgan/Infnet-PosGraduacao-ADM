const express = require('express')
const routes = express.Router()

const userRoutes = require('./users.routes')
const sessionsRoutes = require('./sessions.routes')
const stacksRoutes = require('./stacks.routes')
const teamsRoutes = require('./team.routes')
const skillsRoutes = require('./skill.routes')

routes.use('/users', userRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/stacks', stacksRoutes)
routes.use('/stacks', teamsRoutes)
routes.use('/teams', skillsRoutes)

module.exports = routes
