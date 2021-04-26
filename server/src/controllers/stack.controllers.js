const db = require('../models/index.js')
const { searchStackToName } = require('../services/stack.service')

module.exports = {
  async index(request, response) {
    try {
      const stacks = await db.Stack.findAll()

      response.json(stacks)
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  },

  async indexByName(request, response) {
    const { stack } = request.params

    return response.json(await searchStackToName(stack))
  },

  async create(request, response) {
    const { id, stack, icon, image } = request.body

    const stackAlreadyExists = await searchStackToName(stack)

    if (!stackAlreadyExists) {
      const stacks = {
        id,
        stack,
        icon,
        image
      }

      await db.Stack.create(stacks)
    } else {
      if (stackAlreadyExists.stack === stack) {
        return response.status(400).json({ error: 'Stack already exists!' })
      }
    }

    return response
      .status(200)
      .json({ message: 'Stack successfully registered!' })
  },

  async update(request, response) {
    try {
      const { id } = request.params
      const { stack, icon, image } = request.body

      const stackExists = await db.Stack.findOne({ where: { id } })

      if (!stackExists) {
        return response.status(400).send({ error: 'Stack not found.' })
      }
      await db.Stack.update(
        {
          stack,
          icon,
          image
        },
        { where: { id } }
      )
      response.status(200).send({ message: ' Stack successfully changed ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Stack.destroy({ where: { id } })

      response.status(200).send({ message: ' Stack deleted successfully ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  }
}
