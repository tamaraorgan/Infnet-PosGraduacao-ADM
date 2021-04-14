const md5 = require('md5')
const jwt = require('jsonwebtoken')
const db = require('../models/index.js')
const { response } = require('express')

const hashSecret = process.env.CRYPTO_KEY

module.exports = {
  async searchUsersToEmail(email) {
    const users = await db.User.findOne({
      where: {
        email
      }
    })

    return users
  },

  async usersAlreadyExists(user, password) {
    const users = await db.User.findOne({
      where: {
        email: user,
        password //:md5(password + hashSecret)
      }
    })

    return users ? true : false
  },

  async createCredential(userEmail) {
    try {
      const users = await searchUsersToEmail(userEmail)
      const { name, email, type } = users

      const credential = {
        token: jwt.sign({ email: users.email }, process.env.JWT_KEY, {
          expiresIn: `${process.env.JWT_VALID_TIME}d`
        }),
        user: {
          name,
          email,
          type
        }
      }
      return credential
    } catch (error) {
      response.status(500).send({ error: 'Internal server error' })
    }
  }
}
