import React from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../../components/Login/LoginComponent'
import { sessionCreateRequest } from '../../store/auth/actions'

const Login = (props) => {
  const { signIn, history, sessionError } = props

  const handleSubmit = (inputs) => {
    signIn(inputs, history)
  }

  return (
    <LoginComponent handleSubmitRequest={ handleSubmit } sessionError={ sessionError } />
  )
}

const mapStateToProps = state => ({
  session: state.auth,
  sessionError: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  signIn: (data, history) => dispatch(sessionCreateRequest({ data, history }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
