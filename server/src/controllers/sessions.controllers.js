const {
  usersAlreadyExists,
  createCredential
} = require('../services/user.services')

module.exports = {
  async authUser(request, response) {
    // try {
      const { user, password } = request.body

      const result = await usersAlreadyExists(user, password)

      if (!result) {
        response.status(401).send({ error: 'Incorrect username or password' })
      }
      var credential = await createCredential(user)
      response.status(200).send(credential)
    // } catch (error) {
    //   response.status(500).send({ error: 'Internal server error!' })
    // }
  }
}
