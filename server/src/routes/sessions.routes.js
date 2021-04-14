const express = require('express')
const Joi = require('joi')

const sessionController = require('../controllers/sessions.controllers')
const { validateDTO } = require('../utils/validate.utils')

const routes = express.Router()

routes.post(
  '/',
  validateDTO('body', {
    user: Joi.string().required().messages({
      'any.required': 'E-mail é um campo obrigatório.',
      'string.empty': 'E-mail não pode ser vazio.'
    }),
    password: Joi.string().min(6).max(12).required().messages({
      'any.required': 'A senha é um campo obrigatório.',
      'string.empty': 'A senha não pode ser vazia.',
      'string.min': 'A senha deve conter no mínimo 6 caracteres',
      'string.max': 'A senha deve conter no máximo 12 caracteres'
    })
  }),
  sessionController.authUser
)
module.exports = routes