const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const stacks = await db.Stack.findAll()

    return response.json(stacks)
  },
  async create(request, response) {
    const { stack, image } = request.body

    const stacks = await db.Stack.create({
      stack,
      image
    })
    response.json(stacks)
  }
}
