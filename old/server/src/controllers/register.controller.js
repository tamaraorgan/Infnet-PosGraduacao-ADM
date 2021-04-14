const db = require('../models/index.js')

module.exports = {
  async index(request, response) {
    const { stack_id } = request.params

    const stacks = await db.Stack.findByPk(stack_id, {
      include: { association: 'registers' }
    })

    return response.json(stacks) // mostra somente os registros employees tem que ser desse jeito para listar no front
    //return response.json(register) mostra tudo
  },
  async create(request, response) {
    //
      const { stack_id } = request.params
      console.log(stack_id)

      const { employee, email, phone, place, state, skill } = request.body

      const stacks = await db.Stack.findByPk(stack_id)

      if (!stacks) {
        return response.status(400).json({ error: 'Register not found' })
      }

      await db.Register.create({
        employee,
        email,
        phone,
        place,
        state,
        skill,
        stack_id,
        skill_id
      })
      //response.json(employees)
      response.status(200).send({ message: 'Funcionário criado com sucesso!' })
    // } catch (error) {
    //   response.status(500).send({ message: 'Internal server error' })
    // }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.Register.destroy({ where: { id } })

      //return response.json()
      response.status(200).send({ message: 'Funcionário deletado com sucesso!' })
    } catch (error) {
      response.status(500).send({ message: 'Internal server error' })
    }
  }
}
