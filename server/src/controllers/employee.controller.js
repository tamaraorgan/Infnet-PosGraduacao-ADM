const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { stack_id } = request.params

    const stacks = await db.Stack.findByPk(stack_id, {
      include: { association: 'employees' }
    })

    return response.json(stacks.employees) // mostra somente os registros employees tem que ser desse jeito para listar no front
    //return response.json(register) mostra tudo
  },
  async create(request, response) {
    try {
      const { stack_id } = request.params
      const { name, email, phone, place, state } = request.body

      const stacks = await db.Stack.findByPk(stack_id)

      if (!stacks) {
        return response.status(400).json({ error: 'Register not found' })
      }

      await db.Employee.create({
        name,
        email,
        phone,
        place,
        state,
        stack_id
      })
      //response.json(employees)
      response.status(200).send({ mensage: 'Funcionário criado com sucesso!' })
    } catch (error) {
      response.status(500).send({ mensage: 'Internal server error' })
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Employee.destroy({ where: { id } })

      //return response.json()
      response.status(200).send({ mensage: 'Funcionário deletado com sucesso!' })
    } catch (error) {
      response.status(500).send({ mensage: 'Internal server error' })
    }
  }
}
