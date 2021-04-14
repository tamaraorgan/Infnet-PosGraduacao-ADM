import { FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/auth/auth.action'

import { SectionHeader, Title, SectionInfo } from './style'

function Header({ title }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const logout = () => {
    dispatch(logOut())
  }
  return (
    <SectionHeader>
      <Title>{title}</Title>
      <SectionInfo>
        {user.name}
        <FiLogOut onClick={logout} />
      </SectionInfo>
    </SectionHeader>
  )
}

export default Header
