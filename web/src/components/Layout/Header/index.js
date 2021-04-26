import { FaUserTimes, FaUserCheck } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { isPrivate } from '../../../config/session'
import { HeaderContainer } from './style'

const Header = ({ children }) => {
  const user = useSelector(state => state.session.user)

  return (
    <HeaderContainer>
      {isPrivate() ? (
        <>
          <div className="namePage">Nome da Pagina</div>
          <div className="user">
            {user.name}
            <button>
              <FaUserTimes />
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </HeaderContainer>
  )
}

export default Header
