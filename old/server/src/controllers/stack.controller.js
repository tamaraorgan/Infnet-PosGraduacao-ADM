const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const stacks = await db.Stack.findAll()

    return response.json(stacks)
  },
  async create(request, response) {
    const { stack, image, icon } = request.body

    const stacks = await db.Stack.create({
      stack,
      image,
      icon
    })
    response.json(stacks)
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Stack.destroy({ where: { id } })

      //return response.json()
      response.status(200).send({ mensage: 'Stack deletada com sucesso!' })
    } catch (error) {
      response.status(500).send({ mensage: 'Internal server error' })
    }
  }
}
