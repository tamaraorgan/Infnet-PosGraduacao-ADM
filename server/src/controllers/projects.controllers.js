
const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { stack_id } = request.params

    const stacks = await db.Stack.findByPk(stack_id, {
      include: { association: 'projects' }
    })
    return response.json(stacks.projects)
  },

  async create(request, response) {
    const { stack_id } = request.params
 
    const {
      project,
      description,
      project_manager,
      progress,
      data_created
    } = request.body

    const stacks = await db.Stack.findByPk(stack_id)
    if (!stacks) {
      return response.status(400).json({ error: 'Project not found' })
    }

    const projectExists = await db.Project.findOne({ where: { project } })

    if (!projectExists) {
      const team = {
        project,
        description,
        project_manager,
        progress,
        data_created,
        stack_id
      }

      await db.Project.create(team)
    } else {
      if (projectExists.project === project) {
        return response.status(400).json({ error: 'Project already exists!' })
      }
    }

    response.status(200).send({ message: 'Project successfully created' })
  },

  // async update(request, response) {
  //   try {
  //     const { id } = request.params
  //     const { name, email, phone, place, state } = request.body

  //     const teamExists = await db.Team.findOne({ where: { id } })

  //     if (!teamExists) {
  //       return response.status(400).send({ error: 'Team not found.' })
  //     }
  //     await db.Team.update(
  //       {
  //         name,
  //         email,
  //         phone,
  //         place,
  //         state
  //       },
  //       { where: {} }
  //     )
  //     response.status(200).send({ message: ' Team successfully changed ' })
  //   } catch (error) {
  //     response.status(500).send({ error: 'Internal server error!' })
  //   }
  // },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Project.destroy({ where: { id } })

      response.status(200).send({ message: ' Project deleted successfully ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  }
}
