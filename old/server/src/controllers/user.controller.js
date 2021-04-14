module.exports = {
  async auth(request, response) {
    return response.status(200).send({
      mensage: 'Autenticação realizada com sucesso'
    })
  }
}