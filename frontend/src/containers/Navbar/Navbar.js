import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../../components/Navbar/NavbarComponent'
import { sessionDeleteRequest } from '../../store/auth/actions'

const Navbar = (props) => {
  const { signOut, session } = props

  const logOut = () => {
    signOut(props.history)
  }

  return (
    <NavbarComponent logOut={ logOut } userName={ session.currentSession.data.user.email } />
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: history => dispatch(sessionDeleteRequest({ history }))
})

export default connect(null, mapDispatchToProps)(Navbar)
