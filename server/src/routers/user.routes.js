const express = require('express')
const Joi = require('joi')

const userController = require('../controllers/user.controller')
const { validateDTO } = require('../utils/validate.utils')

const routes = express.Router()



routes.post(
  '/',
  validateDTO('body', {
    email: Joi.string().required().messages({
      'any.required': 'E-mail é um campo obrigatório.',
      'string.empty': 'E-mail não pode ser vazio.'
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': 'A senha é um campo obrigatório.',
      'string.empty': 'A senha não pode ser vazio.',
      'string.min': 'A senha deve conter no minimo 6 caracteres'
    })
  }),
  userController.auth
)

module.exports = routes
