import { combineReducers } from 'redux'

import auth from './auth/reducer'
import clients from './clients/reducer'
import departaments from './departaments/reducer'

export default combineReducers({
  auth,
  clients,
  departaments
})
