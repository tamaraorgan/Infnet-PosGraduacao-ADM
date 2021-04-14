import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaUsersCog, FaMobile } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoDesktopSharp, IoDesktop } from 'react-icons/io5'

import LogoSVG from '../../assets/image/adm.svg'

import { MenuContainer, MenuTitle, MenuItem } from './style.js'
import { getServiceAllStacks } from '../../services/stack.service'

function Menu() {
  const [isActive, setIsActive] = useState(false)

  const [stacks, setStacks] = useState([])

  const getStacks = useCallback(async () => {
    try {
      const res = await getServiceAllStacks()
      setStacks(res.data)
    } catch (error) {}
  }, [])

  useEffect(() => {
    getStacks()
  }, [getStacks])

  function handleOpenMenu() {
    setIsActive(!isActive)
  }
  return (
    <MenuContainer>
      <MenuTitle>
        {isActive ? (
          <>
            <div className="image">
              <img src={LogoSVG} alt="ADM" />
            </div>
            <button onClick={handleOpenMenu}>
              <AiOutlineClose />
            </button>
          </>
        ) : (
          <button onClick={handleOpenMenu}>
            <AiOutlineMenu />
          </button>
        )}
      </MenuTitle>
      <MenuItem show={isActive}>
        <NavLink exact activeClassName="active" className="navbar_link" to="/">
          <div className="button">
            <FaUsersCog />
          </div>
          <div className="description">INÍCIO</div>
        </NavLink>
        {stacks.map((stack, i) => (
          <NavLink
            key={i}
            activeClassName="active"
            className="navbar_link"
            to={`/stacks/${stack.id}`}
          >
            <div className="button">
              <img src={stack.icon} alt="" />
            </div>
            <div className="description">{stack.stack}</div>
          </NavLink>
        ))}
      </MenuItem>
    </MenuContainer>
  )
}
export default Menu
