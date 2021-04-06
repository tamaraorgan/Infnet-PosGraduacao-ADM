const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { register_id } = request.params

    const stacks = await db.Register.findByPk(register_id, {
      include: { association: 'skills' }
    })

    return response.json(stacks) // mostra somente os registros employees tem que ser desse jeito para listar no front
    //return response.json(register) mostra tudo
  },
  async create(request, response) {
    try {
      const { register_id } = request.params
      const { skill, image } = request.body

      const registers = await db.Register.findByPk(register_id)

      if (!registers) {
        return response.status(400).json({ error: 'Register not found' })
      }

      await db.Skill.create({
        skill,
        image,
        register_id
      })

      response.status(200).send({ mensage: 'Skill criado com sucesso!' })
    } catch (error) {
      response.status(500).send({ mensage: 'Internal server error' })
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Skill.destroy({ where: { id } })

      response
        .status(200)
        .send({ mensage: 'Skill deletado com sucesso!' })
    } catch (error) {
      response.status(500).send({ mensage: 'Internal server error' })
    }
  }
}
