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
  Container,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { userName } = props
  const toggle = () => setIsOpen(!isOpen)
  const { logOut } = props

  return (
    <Container>
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <Link to="/">
              <NavbarBrand >Clients</NavbarBrand>
            </Link>
            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
              <Nav className="ml-auto" navbar>
                <NavbarText>
                  Hello, { userName }
                </NavbarText>
                <NavItem>
                  <NavLink className='log-out__text' tag={ Link } onClick={ logOut }>Log out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default NavbarComponent
