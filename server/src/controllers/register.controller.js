const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const stacks = await db.Stack.findAll()

    return response.json(stacks)
  },
  async create(request, response) {
    const { title, stack, image } = request.body

    const stacks = await db.Stack.create({
      title,
      stack,
      image
    })
    response.json(stacks)
  }
}
