const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { project_id } = request.params

    const projects = await db.Project.findByPk(project_id, {
      include: { association: 'teams' }
    })
    return response.json(projects)
  },

  async create(request, response) {
    const { project_id } = request.params
    const { name, email, phone, progress, state } = request.body

    const projects = await db.Project.findByPk(project_id)
    if (!projects) {
      return response.status(400).json({ error: 'Project not found' })
    }

    const teamExists = await db.Team.findOne({ where: { email } })

    if (!teamExists) {
      const team = {
        name,
        email,
        phone,
        progress,
        state,
        project_id
      }

      await db.Team.create(team)
    } else {
      if (teamExists.email === email) {
        return response.status(400).json({ error: 'Team already exists!' })
      }
    }

    response.status(200).send({ message: 'Team successfully created' })
  },

  async update(request, response) {
    // try {
    const { id } = request.params
    const { name, email, phone, progress, state } = request.body

    const teamExists = await db.Team.findOne({ where: { id } })

    if (!teamExists) {
      return response.status(400).send({ error: 'Team not found.' })
    }
    await db.Team.update(
      {
        name,
        email,
        phone,
        progress,
        state
      },
      { where: { id } }
    )
    response.status(200).send({ message: ' Team successfully changed ' })

    // } catch (error) {
    //   response.status(500).send({ error: 'Internal server error!' })
    // }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Team.destroy({ where: { id } })

      response.status(200).send({ message: ' Team deleted successfully ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  }
}
