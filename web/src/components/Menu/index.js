import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaUsersCog, FaMobile } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoDesktopSharp, IoDesktop } from 'react-icons/io5'

import LogoSVG from '../../assets/image/adm.svg'

import { MenuContainer, MenuTitle, MenuItem } from './style.js'


function Menu() {
  const [isActive, setIsActive] = useState(false)

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
        <NavLink
          exact
          activeClassName="active"
          className="navbar_link"
          to="/stacks/1"
        >
          <div className="button">
            <IoDesktop />
          </div>
          <div className="description">BACK-END</div>
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="navbar_link"
          to="/stacks/2"
        >
          <div className="button">
            <IoDesktopSharp />
          </div>
          <div className="description">FRONT-END</div>
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="navbar_link"
          to="/stacks/3"
        >
          <div className="button">
            <FaMobile />
          </div>
          <div className="description">MOBILE</div>
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          className="navbar_link"
          to="/contact"
        >
          <div className="button">
            <RiCustomerService2Fill />
          </div>
          <div className="description">CONTATO</div>
        </NavLink>
      </MenuItem>
    </MenuContainer>
  )
}
export default Menu
