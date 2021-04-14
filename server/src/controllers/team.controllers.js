const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { stack_id } = request.params

    const stacks = await db.Stack.findByPk(stack_id, {
      include: { association: 'teams' }
    })
    return response.json(stacks)
  },

  async create(request, response) {
    const { stack_id } = request.params
    const { name, email, phone, place, state } = request.body

    const stacks = await db.Stack.findByPk(stack_id)
    if (!stacks) {
      return response.status(400).json({ error: 'Stack not found' })
    }

    const teamExists = await db.Team.findOne({ where: { email } })

    if (!teamExists) {
      const team = {
        name,
        email,
        phone,
        place,
        state,
        stack_id
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
    try {
      const { id } = request.params 
      const{ name, email, phone, place, state } = request.body

      const teamExists = await db.Team.findOne({ where: { id } })

      if (!teamExists) {
        return response.status(400).send({ error: 'Team not found.' })
      }
      await db.Team.update(
        {
          name,
          email,
          phone,
          place,
          state,
        },
        { where: {} }
      )
      response.status(200).send({ message: ' Team successfully changed ' })

    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
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
