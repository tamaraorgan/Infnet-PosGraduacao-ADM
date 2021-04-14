const Joi = require('joi')

const createDetail = error => {
  return error.details.reduce((acc, item) => {
    return [...acc, item.message]
  }, [])
}

module.exports = {
  validateDTO(type, params) {
    return (request, response, next) => {
      const schema = Joi.object().keys(params)

      const { value, error } = schema.validate(request[type], {
        allowUnknown: false
      })
      request[type] = value
      return error
        ? response.status(422).send({
            detail: [...createDetail(error)]
          })
        : next()
    }
  }
}