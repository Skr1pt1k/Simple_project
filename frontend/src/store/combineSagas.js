import { fork, all } from 'redux-saga/effects'

import authSaga from './auth/sagas'
import clientsSaga from './clients/sagas'
import departamentsSaga from './departaments/sagas'
import historiesSaga from './histories/sagas'

export function* rootWatcherSaga() {
  yield all([
    fork(authSaga), fork(clientsSaga), fork(departamentsSaga), fork(historiesSaga)
  ])
}
