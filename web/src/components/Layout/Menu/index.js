import { FaUsers, FaUserCheck, FaUserPlus } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { useCallback, useEffect, useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { IoMenuSharp } from 'react-icons/io5'
import { MenuContainer, Button, MenuLogo, MenuLink } from './style'
import { NavLink } from 'react-router-dom'

import { getAllStack } from '../../../config/services/stack.service'
import Logo from '../../../assets/image/adm.svg'

function Menu() {
  const [isDrop, setIsDrop] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const [stacks, setStacks] = useState([])

  const getStack = useCallback(async () => {
    const result = await getAllStack()

    setStacks(result.data)
  }, [])

  useEffect(() => {
    getStack()
  }, [getStack])

  function handleDropDown() {
    setIsDrop(!isDrop)
  }

  function handleOpemMenu() {
    setIsActive(!isActive)
  }

  return (
    <MenuContainer>
      <nav>
        {isActive ? (
          <MenuLogo>
            <img src={Logo} alt="ADM Stack" />
            <Button onClick={handleOpemMenu}>
              <IoMdClose />
            </Button>
          </MenuLogo>
        ) : (
          <Button onClick={handleOpemMenu}>
            <IoMenuSharp />
          </Button>
        )}
        <MenuLink show={isDrop} active={isActive}>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={handleDropDown}
          >
            <div className="dropDown">
              <div className="grupIcon">
                <div className="icon">
                  <FaUsers />
                </div>
                <div className="description">STACK</div>
              </div>
              <div className="drop">
                {stacks.map((stack, i) => (
                  <NavLink
                    key={i}
                    exact
                    activeClassName="active"
                    to={`/stacks/${stack.id}/projects`}
                  >
                    <div className="grupIcon down">
                      <div className="icon">
                        <img src={stack.icon} alt="" />
                      </div>
                      <div className="description">{stack.stack}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </NavLink>
          <NavLink exact activeClassName="active" to="/signin">
            <div className="grupIcon">
              <div className="icon">
                <FaUserCheck />
              </div>
              <div className="description">SIGNIN</div>
            </div>
          </NavLink>
          <NavLink exact activeClassName="active" to="/register">
            <div className="grupIcon">
              <div className="icon">
                <FaUserPlus />
              </div>
              <div className="description">CADASTRO</div>
            </div>
          </NavLink>

          <NavLink exact activeClassName="active" to="/contact">
            <div className="grupIcon">
              <div className="icon">
                <RiCustomerService2Fill />
              </div>
              <div className="description">CONTATO</div>
            </div>
          </NavLink>
        </MenuLink>
      </nav>
    </MenuContainer>
  )
}

export default Menu
