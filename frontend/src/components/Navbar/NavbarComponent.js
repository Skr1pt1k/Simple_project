import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { userName } = props
  const toggle = () => setIsOpen(!isOpen)
  const { logOut } = props

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand tag={ Link } to={ '/' }>Clients</NavbarBrand>
        <NavbarToggler onClick={ toggle } />
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="ml-auto" navbar>
            <NavbarText>
                  Hello,&nbsp;
            </NavbarText>
            <NavbarText className='navbar__user'>
              {userName}
            </NavbarText>
            <NavItem>
              <NavLink className='log-out__text' onClick={ logOut }>Log out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
