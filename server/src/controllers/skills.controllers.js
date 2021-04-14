const { UUID } = require('sequelize')
const db = require('../models')

module.exports = {
  async index(request, response) {
    const { team_id } = request.params

    const team = await db.Team.findByPk(team_id, {
      include: {
        association: 'skills',
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    })

    return response.json(team)
  },

  async create(request, response) {
    const { team_id } = request.params
    const { name, id } = request.body

    const team = await db.Team.findByPk(team_id)

    if (!team) {
      return response.status(400).json({ error: 'Team not found' })
    }

    const [skill] = await db.Skill.findOrCreate({
      where: { name}
    })

    await team.addSkill(skill)

    return response.json(skill)
  },

  async delete(request, response) {
    const { team_id } = request.params
    const { name } = request.body

    const Team = await db.Team.findByPk(team_id)

    if (!Team) {
      return response.status(400).json({ error: 'Team not found' })
    }

    const skill = await Skill.findOne({ where: { name } })

    await Team.removeSkill(skill)

    return response.status(200).send({ message: 'Skill deleted successfully ' })
  }
}
