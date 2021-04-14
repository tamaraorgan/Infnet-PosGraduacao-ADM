import { FaUser, FaLock } from 'react-icons/fa'

import ImageSvg from '../../assets/image/svg-menino.svg'

import { SignInContainer } from './style'

const SignIn = () => {
  return (
    <SignInContainer>
      <h1>Faça seu Login</h1>

      <form>
        <div className="inputDiv">
          <FaUser />
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <div className="inputDiv">
          <FaLock />
          <input type="text" placeholder="Digite sua senha" />
        </div>
        <button>ENVIAR</button>
      </form>

      <p>
        Realize seu <a href="/register">Cadastro</a> !
      </p>
      <img src={ImageSvg} alt="" />
    </SignInContainer>
  )
}

export default SignIn
