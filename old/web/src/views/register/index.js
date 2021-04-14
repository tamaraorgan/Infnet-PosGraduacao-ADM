import { useState } from 'react'

import registerSvg from '../../assets/image/register.svg'

import { Container, Title, RegisterSection } from './style'

const Register = () => {
  const [form, setForm] = useState({})

  const handleChange = props => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  document.title = 'LOGIN'
  return (
    <Container>
      <Title>CADASTRO</Title>
      <RegisterSection>
        <form>
          <h4>Preencha os dados para efetuar o cadastro</h4>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Nome Completo"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Digite seu email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Digite uma senha"
          />
          <button>Cadastrar</button>
        </form>
        <img src={registerSvg} alt=""/>
      </RegisterSection>
    </Container>
  )
}

export default Register
