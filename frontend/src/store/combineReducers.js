import { combineReducers } from 'redux'

import auth from './auth/reducer'
import clients from './clients/reducer'
import departaments from './departaments/reducer'
import histories from './histories/reducer'
import actions from './actions/reducer'

export default combineReducers({
  auth,
  clients,
  departaments,
  histories,
  actions
})
