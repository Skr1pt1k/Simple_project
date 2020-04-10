import React, { useEffect } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { sessionRestoreRequest } from '../store/auth/actions'
import { connect } from 'react-redux'
import LoginPage from '../containers/Login/Login'
import ClientsPage from '../containers/Clients/Clients'
import HistoryPage from '../containers/Histories/Histories'
import NotFound from '../components/NotFound/NotFound'
import PrivateRoute from './PrivateRouter'

import history from '../lib/history'

const App = (props) => {
  useEffect(() => {
    props.restoreSession()
  }, [])

  return (
    <Router history={ history }>
      <Switch>
        <PrivateRoute path="/" exact component={ LoginPage } />
        <PrivateRoute path="/clients" exact component={ ClientsPage } />
        <PrivateRoute path="/history/:id" exact component={ HistoryPage } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  session: state.authentication
})

const mapDispatchToProps = dispatch => ({
  restoreSession: () => dispatch(sessionRestoreRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
