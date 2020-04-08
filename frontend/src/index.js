import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createLogger } from 'redux-logger'

import App from './containers/App'
import { rootWatcherSaga } from './store/combineSagas'
import reducer from './store/combineReducers'

import './assets/scss/main.scss'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({ diff: true, collapsed: true, duration: true })

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootWatcherSaga)

render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
