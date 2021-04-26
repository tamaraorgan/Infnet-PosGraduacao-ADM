const db = require('../models/index.js')
const { searchUsersToEmail } = require('../services/user.services')

module.exports = {
  async index(request, response) {
    try {
      const users = await db.User.findAll()

      response.json(users)
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  },

  async indexByName(request, response) {
    const { email } = request.params

    return response.json(await searchUsersToEmail(email))
  },

  async create(request, response) {
    const { id, name, email, password, type } = request.body

    const usersAlreadyExists = await searchUsersToEmail(email)

    if (!usersAlreadyExists) {
      const users = {
        id,
        name,
        email,
        password,
        type
      }

      await db.User.create(users)
    } else {
      if (usersAlreadyExists.email === email) {
        return response.status(400).json({ error: 'User already exists!' })
      }
    }

    return response
      .status(200)
      .json({ message: 'User successfully registered!' })
  },

  async update(request, response) {
    try {
      const { id } = request.params
      const { name, email, password, type } = request.body

      const userExists = await db.User.findOne({ where: { id } })

      if (!userExists) {
        return response.status(400).send({ error: 'User not found.' })
      }
      await db.User.update(
        {
          name,
          email,
          password,
          type
        },
        { where: { id } }
      )
      response.status(200).send({ message: ' User successfully changed ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params

      await db.User.destroy({ where: { id } })

      response.status(200).send({ message: ' User deleted successfully ' })
    } catch (error) {
      response.status(500).send({ error: 'Internal server error!' })
    }
  }
}
