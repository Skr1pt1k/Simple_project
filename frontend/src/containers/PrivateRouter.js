import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../containers/Navbar/Navbar'
import history from '../lib/history'

const PrivateRoute = ({ component: Component, session, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      session.authenticated ?
        window.location.pathname === '/' ?
          <Redirect to={ { pathname: '/clients', state: { from: props.location } } } /> : session.fetching === false ?
            (<>
              <Navbar history={ history } session={ session } />
              <Component { ...props } />
            </>
            ) : null
        : window.location.pathname !== '/' && session.fetching === false ?
          <Redirect to={ { pathname: '/', state: { from: props.location } } } /> : session.fetching === false ?
            <Component { ...props } /> : null }
  />
)

const mapStateToProps = state => ({
  session: state.auth
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
