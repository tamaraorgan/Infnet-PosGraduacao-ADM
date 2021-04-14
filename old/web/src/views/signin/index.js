import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { FaUser, FaLock } from 'react-icons/fa'

import { signIn } from '../../store/auth/auth.action'
import imageSvg from '../../assets/image/info.svg'

import { Container, SignInBody, Title, FormBody, SectionSignIn } from './style'

const SignIn = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({})
  //const [submit, setSubmit] = useState(false)

  const handleChange = props => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    dispatch(signIn(form))
  }

  document.title = 'LOGIN'
  return (
    <Container>
      <Title>LOGIN</Title>
      <SignInBody>
        <FormBody>
          <img src={imageSvg} alt="" />
          <SectionSignIn>
            <h3>FAÇA SEU LOGIN</h3>
            <form onSubmit={submitForm}>
              <div className="input-area">
                <div>
                  <FaUser />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
                <div>
                  <FaLock />
                  <input
                    type="password"
                    name="password"
                    id="passoword"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    value={form.password}
                  />
                </div>
              </div>
              <button type="submit" >
                LOGIN
              </button>
            </form>
            <p>
              Faça seu <a href="/register">cadastro</a>!
            </p>
          </SectionSignIn>
        </FormBody>
      </SignInBody>
    </Container>
  )
}
export default SignIn
