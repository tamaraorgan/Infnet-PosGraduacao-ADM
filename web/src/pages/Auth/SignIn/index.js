import { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import ImageSvg from '../../../assets/image/svg-menino.svg'
import { signInAction } from '../../../config/redux/session/session.action'


import { SignInContainer } from './style'

const SignIn = () => {
  const [form, setForm] = useState({
    user: 'tamara@organ.com.br',
    password: '121212'
  })
  const [submit] = useState(false)
  const dispatch = useDispatch()

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = e => {
    e.preventDefault()
    dispatch(signInAction(form))
  }

  return (
    <SignInContainer>
      <h1>Faça seu Login</h1>

      <form>
        <div className="inputDiv">
          <FaUser />
          <input
            disabled={submit}
            type="email"
            name="user"
            value={form.user || ''}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="inputDiv">
          <FaLock />
          <input
            disabled={submit}
            type="password"
            name="password"
            value={form.password || ''}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
        </div>
        {/* <div className="checkbox">
          <label htmlFor="gestao">Gestão</label>
          <input
            type="checkbox"
            name="gestao"
            id="gestao"
            valeu={(form.type = '1')}
          />
          <label htmlFor="colaborador">Colaborador</label>
          <input
            type="checkbox"
            name="colaborador"
            id="colaborador"
            valeu={(form.type = '2')}
          />
        </div> */}
        <button
          type="botton"
          color={submit ? 'secondary' : 'primary'}
          disabled={submit}
          onClick={submitForm}
        >
          {submit ? 'CARREGANDO' : 'ENVIAR'}
        </button>
      </form>
      <p>
        Realize seu <a href="/register">Cadastro</a> !
      </p>
      <img src={ImageSvg} alt="" />
    </SignInContainer>
  )
}

export default SignIn
