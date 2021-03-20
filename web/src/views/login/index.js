import { FaUser, FaLock } from 'react-icons/fa'

import { Container, Body, Title, FormBody } from './style'

function Login() {
  document.title = 'LOGIN'
  return (
    <Container>
      <Title>LOGIN</Title>
      <Body>
        <FormBody>
          <h3>FAÇA SEU LOGIN</h3>
          <div className="input-area">
            <div>
              <FaUser />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <FaLock />
              <input
                type="password"
                name="senha"
                id=""
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          <button type="submit">LOGIN</button>
        </FormBody>
      </Body>
    </Container>
  )
}
export default Login
